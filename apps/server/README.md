# Authly Server

A robust, production-ready Express + TypeScript backend for authentication, multi-factor authentication (MFA), session management, and secure API development. This server is designed for use in full-stack MERN applications and supports modern best practices, logging, rate limiting, and OpenAPI documentation.

---

## Table of Contents
- [Project Structure](#project-structure)
- [Features](#features)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Authentication & MFA](#authentication--mfa)
- [Session Management](#session-management)
- [Logging & Monitoring](#logging--monitoring)
- [API Documentation (Swagger/OpenAPI)](#api-documentation-swaggeropenapi)
- [Rate Limiting & Security](#rate-limiting--security)
- [Database](#database)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Project Structure
```
apps/server/
├── .env.example         # Example environment variables
├── package.json         # Server scripts and dependencies
├── tsconfig.json        # TypeScript config
├── src/
│   ├── index.ts         # Main entry point
│   ├── @types/          # Type definitions
│   ├── common/          # Shared enums, interfaces, utils, validators
│   ├── config/          # App and HTTP config
│   ├── database/        # MongoDB connection and models
│   ├── docs/            # OpenAPI YAML spec
│   ├── mailers/         # Email sending and templates
│   ├── middlewares/     # Core, auth, helpers
│   ├── modules/         # Feature modules: auth, mfa, session, user
└── ...
```

## Features
- RESTful API for authentication, MFA, session management
- JWT-based authentication
- Multi-factor authentication (TOTP)
- Session tracking and revocation
- Rate limiting (global, auth, sensitive)
- Centralized error handling
- Logging (Winston + Better Stack Logtail)
- OpenAPI 3.1 documentation (Swagger UI)
- Environment-driven configuration
- Health check endpoint
- Email verification and password reset
- TypeScript throughout

## Setup & Installation
1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill out required values.
3. **Run in development:**
   ```sh
   npm run dev
   ```
4. **Build for production:**
   ```sh
   npm run build
   npm start
   ```

## Environment Variables
See `.env.example` for all required variables. Key variables:
- `PORT`, `NODE_ENV`, `APP_ORIGIN`, `BASE_PATH`, `MONGO_URI`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `RESEND_API_KEY`, `MAILER_SENDER`, `LOGTAIL_SOURCE_TOKEN`, `LOGTAIL_INGEST_ENDPOINT`, `RATE_LIMIT_*`, `SWAGGER_UI_ENABLED`

## Scripts
- `npm run dev` — Start server in dev mode (ts-node-dev)
- `npm run build` — Build TypeScript
- `npm start` — Start server in production
- `npm run typecheck` — Type-check code

## Configuration
- All config is loaded from environment variables via `src/config/app.config.ts`
- CORS origins are configurable for multiple frontends
- Rate limiting is configurable via env

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
- OpenAPI 3.1 YAML spec in `src/docs/openapi.yml`
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
- Connection managed in `src/database/database.ts`

## Error Handling
- Centralized error handler middleware
- Custom error classes and enums
- Consistent error responses

## Testing
- Type-checking via TypeScript
- Linting via ESLint
- Prettier for formatting
- (Add unit/integration tests as needed)

## Deployment
- Deployable to any Node.js host (Heroku, Vercel, AWS, etc.)
- Environment variables required for production

## Troubleshooting
- **CORS errors:** Ensure backend allows your frontend origin in CORS config
- **Database errors:** Check `MONGO_URI` and database connectivity
- **Logtail issues:** Verify `LOGTAIL_SOURCE_TOKEN` and endpoint
- **Port conflicts:** Change ports in `.env` as needed
- **Build errors:** Run `npm run typecheck` and `npm run lint` for diagnostics

## License
This project is licensed under the ISC License. See LICENSE for details.

---

For questions or support, open an issue or contact the maintainer.
