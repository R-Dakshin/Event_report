# VIT Chennai Event Portal

A secure, role-based event management portal for VIT Chennai clubs and chairpersons. The platform supports event reporting, OD (attendance) submissions, pre-event approvals, admin dashboards, and export-ready reporting workflows.

## Features

- Secure authentication for admins and chairpersons
- Club and chairperson management
- Event report submission and tracking
- OD list uploads and verification workflow
- Pre-event operation approvals
- Admin analytics dashboard
- Notification center for portal activity
- File upload support for reports and images
- MongoDB-backed persistence for production readiness
- Vercel-friendly frontend and backend deployment layout

## Tech Stack

- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB Atlas (with fallback to local JSON for development)
- Auth: JWT
- Deployment: Vercel (frontend) and Vercel serverless functions / external Node host (backend)

## Project Structure

- frontend/: React/Vite application
- backend/: Express API and MongoDB integration

## Environment Variables

Create a backend environment file using the provided example:

```bash
cp backend/.env.example backend/.env
```

Then update the values:

- MONGODB_URI: your MongoDB Atlas connection string
- JWT_SECRET: a strong random secret
- ALLOWED_ORIGINS: allowed frontend origins

## Local Development

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend expects the API at the same origin when deployed. For local development, set VITE_API_URL if needed.

## Production Deployment

### Frontend (Vercel)

1. Import the frontend folder into Vercel.
2. Set build command: npm run build
3. Set output directory: dist
4. Set environment variable:
   - VITE_API_URL=https://your-backend-domain/api

### Backend

The current backend is ready for deployment to a Node-compatible host such as Render, Railway, or Vercel serverless with an adapter. For Vercel, it is recommended to host the API on a dedicated Node server or use a provider with persistent Node runtime support.

## Security Notes

- Never expose MongoDB credentials in frontend code.
- Keep JWT secrets in environment variables.
- Restrict CORS origins to your deployed domains.
- Do not commit .env files or credentials to source control.

## Default Admin Access

A default admin account is created automatically when no admin exists:

- Username: admin
- Password: admin123

