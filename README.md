# feeding-times

A full-stack infant feeding tracker. Log feedings with date, time, and amount — and review the history at a glance.

## Tech Stack

- **Backend:** Node.js + Express + TypeScript, Drizzle ORM, SQLite
- **Frontend:** React + TypeScript + Vite

## Getting Started

### Backend

```bash
cd backend
yarn install
yarn dev
# → http://localhost:3000
```

### Frontend

```bash
cd frontend
yarn install
yarn dev
# → http://localhost:5173
```

The frontend expects the backend running on `localhost:3000` (CORS is enabled).

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/feedings` | List all feedings |
| `POST` | `/feedings` | Log a new feeding `{ amount }` |
| `GET` | `/feedings/:id` | Get a single feeding |
| `PUT` | `/feedings/:id` | Update a feeding |
| `DELETE` | `/feedings/:id` | Delete a feeding |

Feedings are stored with auto-generated `date` and `time` fields on creation (e.g. `"May 8, 2025"`, `"2:30 PM"`).

## What Works

- Full CRUD API backed by SQLite via Drizzle ORM
- React frontend with a `FeedingBlock` component for logging
- CORS configured for local frontend–backend communication

## What's Missing

- No analytics or history views — data is logged but not visualized
- No feeding timer / duration tracking
- No mobile-optimized layout or PWA setup
- No authentication (fine for local/personal use)

## Next Steps

1. **Add a daily summary view** — total amount per day and feeding frequency chart. Even a simple bar chart with Chart.js or Recharts makes the data useful.
2. **Add a feeding timer** — a live stopwatch that records how long each session lasted, stored as a `duration` field.
3. **Make it a PWA** — add a `manifest.json` and service worker so it installs on a phone and works offline.
4. **Containerize with Docker Compose** — package the backend and SQLite file together so it runs reliably on any machine without manual Node setup.
