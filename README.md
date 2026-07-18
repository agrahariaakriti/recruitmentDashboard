# Recruitment Management Dashboard

Full-stack recruitment/hiring dashboard built with the MERN stack.

## Structure
- `Backend/` — Node.js, Express, MongoDB (Mongoose), JWT auth
- `Frontend/` — React (Vite), Tailwind CSS, React Router

## What it does
- Auth (register/login) for recruiters
- Create and manage job postings
- Add and manage candidates
- Track applications and move them through statuses (Applied → Shortlisted → Interview → Offered → Hired/Rejected)
- Dashboard with live stats and recent activity

## Running locally

Backend:
```
cd Backend
npm install
npm run dev
```

Frontend:
```
cd Frontend
npm install
npm run dev
```

## Deployment
- Backend: Render / Railway / your own server
- Frontend: Vercel / Netlify

See each folder's own README for setup details and where to update environment variables.
