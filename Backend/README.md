# Recruitment Management Dashboard - Backend

Node.js + Express + MongoDB API for managing jobs, candidates and applications.

## Tech Stack
- Node.js, Express
- MongoDB with Mongoose
- JWT authentication
- bcryptjs for password hashing

## Setup

1. Install dependencies
```
npm install
```

2. Create a `.env` file (see `.env` for reference) and set:
- `MONGO_URI` - your MongoDB connection string
- `JWT_SECRET` - any secret string
- `CLIENT_URL` - deployed frontend URL

3. Run locally
```
npm run dev
```

## API Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/jobs`
- `POST /api/jobs`
- `GET /api/candidates`
- `POST /api/candidates`
- `GET /api/applications`
- `POST /api/applications`
- `GET /api/dashboard/stats`
