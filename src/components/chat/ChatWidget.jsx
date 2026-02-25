import React, { useEffect, useMemo, useRef, useState } from "react";
import { FiMessageCircle, FiSend, FiX } from "react-icons/fi";
import "./ChatWidget.scss";
import { sendChatMessage } from "../../services/chatApi";

const MAX_HISTORY_FOR_API = 8;
const STORAGE_KEY = "eranga_portfolio_chat_history_v1";
const STREAM_INITIAL_DELAY_MS = 120;
const STREAM_STEP_INTERVAL_MS = 20;
const STREAM_TARGET_CHUNKS = 90;
const STREAM_REPLY_FALLBACK =
  "I could not generate a full response this time. Please ask again about Eranga's experience, projects, or technical skills.";

const defaultAssistantMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi, I am Eranga's AI assistant. I can answer in Eranga's voice about my projects, skills, experience, and availability.",
};

const normalizeStoredMessages = (loadedMessages) => {
  if (!Array.isArray(loadedMessages)) {
    return [defaultAssistantMessage];
  }

  const normalized = loadedMessages
    .filter((item) => item && typeof item === "object")
    .map((item, index) => ({
      id: item.id || `stored-${index}`,
      role: item.role === "user" ? "user" : "assistant",
      content: String(item.content || "").trim(),
    }))
    .filter((item) => item.content.length > 0);

  return normalized.length > 0 ? normalized : [defaultAssistantMessage];
};

const mapForApi = (messages) => {
  return messages
    .filter((item) => item.role === "user" || item.role === "assistant")
    .map((item) => ({
      role: item.role,
      content: item.content,
    }))
    .slice(-MAX_HISTORY_FOR_API);
};

const ChatWidget = () => {
  const initialMessages = useMemo(() => {
    if (typeof window === "undefined") {
      return [defaultAssistantMessage];
    }

    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        return [defaultAssistantMessage];
      }

      const parsed = JSON.parse(saved);
      return normalizeStoredMessages(parsed);
    } catch (error) {
      return [defaultAssistantMessage];
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  const scrollRef = useRef(null);
  const streamTimeoutRef = useRef(null);
  const isUnmountedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (!isOpen || !scrollRef.current) {
      return;
    }

    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isOpen, isSending]);

  useEffect(() => {
    isUnmountedRef.current = false;

    return () => {
      isUnmountedRef.current = true;
      if (streamTimeoutRef.current) {
        clearTimeout(streamTimeoutRef.current);
      }
    };
  }, []);

  const streamAssistantReply = (fullText) => {
    return new Promise((resolve) => {
      const responseText = String(fullText || "").trim();
      if (!responseText) {
        resolve(false);
        return;
      }

      const assistantMessageId = `${Date.now()}-assistant`;
      const stepSize = Math.max(
        1,
        Math.ceil(responseText.length / STREAM_TARGET_CHUNKS)
      );

      setMessages((prev) => [
        ...prev,
        {
          id: assistantMessageId,
          role: "assistant",
          content: "",
        },
      ]);

      let cursor = 0;

      const tick = () => {
        if (isUnmountedRef.current) {
          resolve(false);
          return;
        }

        cursor = Math.min(responseText.length, cursor + stepSize);
        const currentChunk = responseText.slice(0, cursor);

        setMessages((prev) =>
          prev.map((item) =>
            item.id === assistantMessageId
              ? { ...item, content: currentChunk }
              : item
          )
        );

        if (cursor < responseText.length) {
          streamTimeoutRef.current = setTimeout(tick, STREAM_STEP_INTERVAL_MS);
        } else {
          streamTimeoutRef.current = null;
          resolve(true);
        }
      };

      streamTimeoutRef.current = setTimeout(tick, STREAM_INITIAL_DELAY_MS);
    });
  };

  const submitMessage = async (event) => {
    event.preventDefault();

    if (isSending) {
      return;
    }

    const text = input.trim();
    if (!text) {
      return;
    }

    const userMessage = {
      id: `${Date.now()}-user`,
      role: "user",
      content: text,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsSending(true);

    try {
      const response = await sendChatMessage({
        message: text,
        messages: mapForApi(messages),
      });

      const hasStreamed = await streamAssistantReply(response.reply);
      if (!hasStreamed && !isUnmountedRef.current) {
        await streamAssistantReply(STREAM_REPLY_FALLBACK);
      }
    } catch (requestError) {
      setError(requestError.message || "I could not respond right now.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="chat-widget" aria-live="polite">
      {isOpen && (
        <div
          className="chat-widget__panel"
          role="dialog"
          aria-label="Chat with Eranga AI assistant"
        >
          <div className="chat-widget__header">
            <div>
              <div className="chat-widget__title">Eranga AI Assistant</div>
              <div className="chat-widget__subtitle">
                Portfolio-aware responses in real time
              </div>
            </div>
            <button
              type="button"
              className="chat-widget__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <FiX />
            </button>
          </div>

          <div ref={scrollRef} className="chat-widget__messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-widget__message chat-widget__message--${message.role}`}
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="chat-widget__composer">
            {error && <div className="chat-widget__error">{error}</div>}

            <form className="chat-widget__form" onSubmit={submitMessage}>
              <input
                className="chat-widget__input"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Eranga's experience, skills, or projects..."
                maxLength={1200}
                disabled={isSending}
                aria-label="Type your message"
              />
              <button
                className="chat-widget__send"
                type="submit"
                disabled={isSending || input.trim().length === 0}
                aria-label="Send message"
              >
                <FiSend />
              </button>
            </form>

            {isSending && (
              <div className="chat-widget__typing" role="status" aria-live="polite">
                <span>AI assistant is typing</span>
                <span className="chat-widget__typing-dots" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        className="chat-widget__toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat widget" : "Open chat widget"}
      >
        {isOpen ? (
          <>
            <FiX />
            <span className="chat-widget__toggle-text">Close</span>
          </>
        ) : (
          <>
            <FiMessageCircle />
            <span className="chat-widget__toggle-text">Ask AI</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
