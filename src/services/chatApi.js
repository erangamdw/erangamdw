const CHAT_API_URL = "/api/chat";
const CLIENT_EMPTY_REPLY_FALLBACK =
  "I could not generate a full response this time. Please ask again about Eranga's experience, projects, or technical skills.";

export const sendChatMessage = async ({ message, messages = [] }) => {
  let response;

  try {
    response = await fetch(CHAT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, messages }),
    });
  } catch (networkError) {
    throw new Error(
      "Chat service is unreachable right now. Please refresh and try again."
    );
  }

  const contentType = response.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json().catch(() => ({})) : {};

  if (!response.ok) {
    if (response.status === 404 && !isJson) {
      throw new Error(
        "Chat API route is not available in this environment. On local, run with `vercel dev`."
      );
    }

    const rawErrorMessage =
      data.error || "I could not respond right now. Please try again shortly.";

    const normalizedError = String(rawErrorMessage).toLowerCase();
    if (
      normalizedError.includes("provider returned error") ||
      normalizedError.includes("rate limit") ||
      normalizedError.includes("overloaded") ||
      normalizedError.includes("temporarily unavailable")
    ) {
      throw new Error(
        "The AI provider is temporarily busy. Please try again in a few seconds."
      );
    }

    throw new Error(rawErrorMessage);
  }

  if (!data.reply || typeof data.reply !== "string") {
    throw new Error("I could not generate a response right now.");
  }

  const reply = data.reply.trim();
  if (!reply) {
    return {
      reply: CLIENT_EMPTY_REPLY_FALLBACK,
      model: data.model || null,
    };
  }

  return {
    reply,
    model: data.model || null,
  };
};
