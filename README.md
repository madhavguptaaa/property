## Aggent Property Experience

This repository contains a bespoke property discovery experience that mirrors the look and feel of [aggent.in](https://aggent.in/). The product is built with **Next.js 14 (App Router), TypeScript, Tailwind CSS**, and a lightweight **FastAPI** backend for capturing buyer enquiries.

### Project Structure

- `src/app` – Next.js App Router entry points.
- `src/components` – Modular UI sections composing the landing page.
- `src/data` – Structured content powering the UI.
- `backend/app` – FastAPI application exposing enquiry endpoints.

### Prerequisites

- Node.js 20+
- Python 3.11+

### 1. Frontend Setup

```bash
cd property-site
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

To configure the backend URL, create an `.env.local` file at the project root:

```
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

### 2. Python Backend

The backend captures enquiry submissions from the website and is ready to be extended with CRM or database integrations.

```bash
cd property-site/backend
python -m venv .venv
.venv\Scripts\activate  # Windows
# source .venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
uvicorn app.main:app --reload
```

The API will start at [http://127.0.0.1:8000](http://127.0.0.1:8000) with routes:

- `GET /health` – health probe.
- `POST /enquiries` – accepts enquiry payloads from the contact form.

### Testing the flow

1. Start both the Next.js dev server and the FastAPI server.
2. Visit the "Book a consultation" form and submit a request.
3. Inspect the FastAPI console to verify the JSON payload is received.

### Next Steps

- Connect `POST /enquiries` to your CRM, email service, or datastore.
- Add dedicated listing pages under `src/app/(routes)`.
- Hook the search bar into real inventory or an Algolia/Elastic index.
