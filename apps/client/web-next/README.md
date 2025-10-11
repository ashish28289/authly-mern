# Authly Next.js Client

A modern, production-ready Next.js frontend for authentication, multi-factor authentication (MFA), session management, and secure API integration. This app is designed for use in full-stack MERN applications and supports SSR/SSG, route protection, and a beautiful UI with Tailwind and shadcn/ui.

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
- [UI & Styling](#ui--styling)
- [API Integration](#api-integration)
- [Route Protection](#route-protection)
- [Testing](#testing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Project Structure
```
apps/client/web-next/
├── .env.example         # Example environment variables
├── package.json         # App scripts and dependencies
├── tsconfig.json        # TypeScript config
├── app/                 # Next.js app directory (pages, layouts, components)
├── components/          # UI components (shadcn/ui)
├── context/             # Providers (auth, theme, query)
├── hooks/               # Custom React hooks
├── lib/                 # API and utility functions
├── middleware.ts        # Route protection middleware
└── ...
```

## Features
- SSR/SSG with Next.js 14+
- Authentication (register, login, password reset)
- Multi-factor authentication (MFA)
- Session management (view, revoke)
- Route protection via middleware
- Modern UI (Tailwind, shadcn/ui)
- React Query for data fetching
- Environment-driven config
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
   - App runs at http://localhost:3000

## Environment Variables
See `.env.example` for all required variables. Key variables:
- `NEXT_PUBLIC_API_BASE_URL`, `NEXT_PUBLIC_APP_NAME`, etc.

## Scripts
- `npm run dev` — Start Next.js in dev mode
- `npm run build` — Build for production
- `npm start` — Start in production
- `npm run lint` — Lint code

## Configuration
- All config is loaded from environment variables
- API base URL is configurable for backend integration

## Authentication & MFA
- Register, login, password reset flows
- Email verification
- MFA setup, verify, revoke flows
- TOTP-based MFA (compatible with Google Authenticator, Authy, etc.)

## Session Management
- View active sessions
- Revoke sessions
- Device/user agent tracking

## UI & Styling
- Tailwind CSS for rapid styling
- shadcn/ui for accessible, modern components
- Custom layouts and theming

## API Integration
- Axios for HTTP requests
- React Query for data fetching and caching
- All endpoints documented in backend Swagger/OpenAPI

## Route Protection
- Middleware for protected/public routes
- Redirects based on authentication state

## Testing
- Type-checking via TypeScript
- Linting via ESLint
- Prettier for formatting
- (Add unit/integration tests as needed)

## Deployment
- Deployable to Vercel (recommended), Netlify, or any Node.js host
- Environment variables required for production

## Troubleshooting
- **CORS errors:** Ensure backend allows your frontend origin in CORS config
- **API errors:** Check API base URL and backend status
- **Build errors:** Run `npm run typecheck` and `npm run lint` for diagnostics

## License
This project is licensed under the ISC License. See LICENSE for details.

---

For questions or support, open an issue or contact the maintainer.
