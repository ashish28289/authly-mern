# Authly MERN Starter

A comprehensive monorepo starter for authentication, multi-factor authentication (MFA), session management, and modern full-stack development using MongoDB, Express, React, Next.js, and Node.js. This project is production-ready, fully documented, and designed for rapid prototyping and scalable deployments.

---

## Table of Contents
- [Project Structure](#project-structure)
- [Features](#features)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Backend (Express/Node)](#backend-expressnode)
- [Frontend (React/Vite)](#frontend-reactvite)
- [Frontend (Next.js)](#frontend-nextjs)
- [Authentication & MFA](#authentication--mfa)
- [Session Management](#session-management)
- [Logging & Monitoring](#logging--monitoring)
- [API Documentation (Swagger/OpenAPI)](#api-documentation-swaggeropenapi)
- [Rate Limiting & Security](#rate-limiting--security)
- [Database](#database)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Project Structure
```
├── apps/
│   ├── client/
│   │   ├── web-react/   # React + Vite SPA
│   │   └── web-next/    # Next.js SSR/SSG app
│   └── server/          # Express + TypeScript backend
├── package.json         # Monorepo root scripts
├── README.md            # Project documentation
└── ...
```

## Features
- Full-stack authentication (register, login, password reset)
- Multi-factor authentication (MFA) with TOTP
- Session management (view, revoke, device tracking)
- Role-based access (extensible)
- Rate limiting (global, auth, sensitive)
- Centralized logging (Winston + Better Stack)
- API documentation (OpenAPI/Swagger)
- Environment-driven config
- Health check endpoint
- Modern UI (Tailwind, shadcn/ui)
- React (SPA) and Next.js (SSR/SSG) clients
- TypeScript everywhere
- Production-ready scripts

## Setup & Installation
1. **Clone the repo:**
   ```sh
   git clone <repo-url>
   cd authly-mern
   ```
2. **Install dependencies:**
   ```sh
   npm install --workspaces
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env` in each app and fill out required values.
4. **Run all apps in development:**
   ```sh
   npm run dev
   ```
   - React: http://localhost:5173
   - Next.js: http://localhost:3000
   - Backend: http://localhost:8000

## Environment Variables
See `.env.example` in each app for all required variables. Key backend variables:
- `PORT`, `NODE_ENV`, `APP_ORIGIN`, `BASE_PATH`, `MONGO_URI`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `RESEND_API_KEY`, `MAILER_SENDER`, `LOGTAIL_SOURCE_TOKEN`, `LOGTAIL_INGEST_ENDPOINT`, `RATE_LIMIT_*`, `SWAGGER_UI_ENABLED`

## Scripts
- `npm run dev` — Start all apps in dev mode
- `npm run build` — Build all apps
- `npm run start` — Start backend in production
- `npm run typecheck` — Type-check all apps
- `npm run lint` — Lint all code
- `npm run format` — Format codebase

## Backend (Express/Node)
- Located in `apps/server`
- REST API with endpoints for auth, mfa, session
- Centralized error handling
- JWT authentication
- Passport.js integration
- Rate limiting via `express-rate-limit`
- Logging via Winston and Better Stack (Logtail)
- Swagger UI at `/docs` (if enabled)
- Health check at `/`

## Frontend (React/Vite)
- Located in `apps/client/web-react`
- SPA with modern UI (Tailwind, shadcn/ui)
- React Query for data fetching
- Authentication flows (register, login, password reset, MFA)
- Session management UI
- Environment-driven config

## Frontend (Next.js)
- Located in `apps/client/web-next`
- SSR/SSG app with Next.js 14+
- Modern UI (Tailwind, shadcn/ui)
- Middleware for route protection
- Authentication and MFA flows
- Session management

## Authentication & MFA
- Register, login, password reset endpoints
- Email verification
- MFA setup, verify, revoke endpoints
- TOTP-based MFA (compatible with Google Authenticator, Authy, etc.)

## Session Management
- View active sessions
- Revoke sessions
- Device/user agent tracking

## Logging & Monitoring
- Winston logger with console, file, and Logtail transports
- Sensitive data redaction
- Logtail integration for Better Stack
- Health and error logs

## API Documentation (Swagger/OpenAPI)
- OpenAPI 3.1 YAML spec in `apps/server/src/docs/openapi.yml`
- Swagger UI at `/docs` (if enabled)
- All endpoints documented

## Rate Limiting & Security
- Global, auth, and sensitive rate limiters
- Configurable via environment variables
- Centralized error handling
- CORS configuration for multiple origins

## Database
- MongoDB (Atlas or local)
- Mongoose models for User, Session, VerificationCode
- Connection managed in `apps/server/src/database/database.ts`

## Testing
- Type-checking via TypeScript
- Linting via ESLint
- Prettier for formatting
- (Add unit/integration tests as needed)

## Deployment
- Backend: Deployable to any Node.js host (Heroku, Vercel, AWS, etc.)
- React: Deployable to Vercel, Netlify, or any static host
- Next.js: Deployable to Vercel (recommended)
- Environment variables required for production

## Contributing
- Fork the repo and create a feature branch
- Follow code style and commit guidelines
- Submit PRs with clear descriptions
- All contributions welcome!

## Troubleshooting
- **CORS errors:** Ensure backend allows your frontend origin in CORS config
- **Database errors:** Check `MONGO_URI` and database connectivity
- **Logtail issues:** Verify `LOGTAIL_SOURCE_TOKEN` and endpoint
- **Port conflicts:** Change ports in `.env` files as needed
- **Build errors:** Run `npm run typecheck` and `npm run lint` for diagnostics

## License
This project is licensed under the ISC License. See LICENSE for details.

---

For questions or support, open an issue or contact the maintainer.
