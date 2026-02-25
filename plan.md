# Chatbot Integration Plan (`erangamdw.com`)

## Goal
Add a portfolio chatbot that:
- loads minimized at the bottom-right of the website
- answers in Eranga's voice and context
- uses OpenRouter with model `openai/gpt-oss-120b:free`
- keeps `OPEN_ROUTER_API_KEY` secure (not exposed in browser code)

## Architecture Decision
- Use a Vercel Serverless Function (`/api/chat`) as the secure proxy to OpenRouter.
- Frontend React widget calls `/api/chat` instead of OpenRouter directly.
- Store `OPEN_ROUTER_API_KEY` in Vercel environment variables (and local env for development), server-side only.

Reason: This prevents leaking the API key in client bundles.

## Phase 1: Knowledge + Persona Source
1. Collect Eranga profile context from:
- `src/components/About.jsx`
- `src/components/Resume.jsx`
- `src/components/Contact.jsx`
- CV files under `src/documents/`
2. Create a structured persona/context file (for prompt grounding), e.g.:
- `src/data/erangaProfile.js` (or `src/data/erangaProfile.json`)
3. Define answer style rules:
- first-person voice ("I", "my")
- professional, concise, helpful
- honest when unknown (no fabrication)
- encourage contact for project opportunities

Deliverable:
- reusable system prompt template + profile context source file.

## Phase 2: Backend API on Vercel
1. Add serverless endpoint:
- `api/chat.js`
2. Endpoint responsibilities:
- validate input payload
- build messages with system prompt + short conversation history
- call OpenRouter `chat/completions` API using:
  - model: `openai/gpt-oss-120b:free`
  - key: `process.env.OPEN_ROUTER_API_KEY`
- return normalized JSON to frontend
3. Add protective controls:
- request size and history length limits
- basic rate limiting strategy (lightweight, best-effort for serverless)
- graceful error mapping (timeouts, 429, upstream failures)

Deliverable:
- working `/api/chat` endpoint with secure key usage.

## Phase 3: Chat Widget UI (Minimized Bottom-Right)
1. Create component(s), e.g.:
- `src/components/chat/ChatWidget.jsx`
- `src/components/chat/ChatWidget.scss`
2. UX behavior:
- default state on page load: minimized
- fixed position: bottom-right
- click button to expand/collapse
- message list, input box, send button
- loading state while waiting for reply
3. Responsive behavior:
- desktop panel size for readability
- mobile fallback width/height without blocking whole page
4. Accessibility:
- keyboard open/close and send
- aria labels and focus handling

Deliverable:
- polished floating chat widget integrated into `App.js`.

## Phase 4: Frontend-Backend Wiring
1. Add chat service helper, e.g.:
- `src/services/chatApi.js`
2. Implement message flow:
- user message -> optimistic render
- POST `/api/chat` with recent chat history
- assistant reply render
3. Session handling:
- keep in-memory history
- optional `localStorage` persistence for same browser session continuity

Deliverable:
- end-to-end chat interaction working in local + deployed environments.

## Phase 5: Prompt Quality + Guardrails
1. System prompt rules:
- act as Eranga for portfolio/career/project questions
- use CV/profile facts first
- avoid making up employers, dates, skills, or achievements
- if uncertain, ask clarifying question or direct to contact section
2. Add short fallback responses for:
- unsupported questions
- policy/safety sensitive requests
- temporary service failures

Deliverable:
- consistent, credible, personal responses.

## Phase 6: Config, QA, and Deployment
1. Environment/config:
- ensure `OPEN_ROUTER_API_KEY` exists in Vercel project env vars
- confirm local development env placement for serverless runtime
2. QA checklist:
- minimized on initial load
- open/close behavior stable across pages/scroll
- model response quality aligned with persona
- no API key visible in browser/network client payloads
- error handling works (empty input, API fail, timeout)
3. Deploy and validate on `erangamdw.com`.

Deliverable:
- production-ready chatbot on Vercel domain.

## Suggested Implementation Order
1. Persona/context file
2. `/api/chat` serverless endpoint
3. React chat widget (minimized by default)
4. API wiring + loading/error UX
5. QA and deploy verification

## Definition of Done
- Chat icon appears bottom-right and starts minimized on load.
- Users can open widget and ask questions.
- Responses are generated via OpenRouter model `openai/gpt-oss-120b:free`.
- Bot responds in Eranga's voice with CV-grounded answers.
- `OPEN_ROUTER_API_KEY` remains server-side only.
- Feature works on deployed Vercel site without regressions.
