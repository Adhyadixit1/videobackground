# Deployment & API Consistency Guide

## Critical Rule: Synchronize `server/index.js` and `api/index.js`

**IMPORTANT:** This project uses two entry points for the backend logic:
1.  **`server/index.js`**: Used for **local development** (`npm run server`).
2.  **`api/index.js`**: Used for **Vercel deployment** (Serverless Functions).

### Workflow for Backend Changes
Whenever you modify any backend logic (chatbot responses, database queries, new endpoints, etc.), you **MUST** apply the changes to **BOTH** files.

1.  **Make changes in `server/index.js`** first and test locally.
2.  **Copy/Apply the EXACT same changes to `api/index.js`**.

### Current Synchronization Status
- **Chatbot Logic**: Synchronized (Price/Quote handling & WhatsApp CTA).
- **Leads API**: Synchronized.
- **Admin API**: Synchronized.
- **Login API**: Synchronized.

### Differences to Maintain
- `server/index.js` ends with `app.listen(...)` to start the local server.
- `api/index.js` ends with `export default app;` for Vercel's serverless handler (and an optional `app.listen` wrapped in a non-production check).

---
*Created: 2025-12-31*
