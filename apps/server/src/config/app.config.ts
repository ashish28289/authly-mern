import { getEnv } from "../common/utils/env-utils";

const appConfig = () => ({
  NODE_ENV: getEnv("NODE_ENV", "development"),
  APP_NAME: getEnv("APP_NAME", "authly-backend"),
  APP_ORIGIN: getEnv("APP_ORIGIN", "localhost"),
  PORT: getEnv("PORT", "5000"),
  BASE_PATH: getEnv("BASE_PATH", "/api/v1"),
  ENABLE_DOCS: getEnv("ENABLE_DOCS", "true"),
  MONGO_URI: getEnv("MONGO_URI"),
  JWT: {
    SECRET: getEnv("JWT_SECRET"),
    EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "15m"),
    REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET"),
    REFRESH_EXPIRES_IN: getEnv("JWT_REFRESH_EXPIRES_IN", "30d"),
  },
  MAILER_SENDER: getEnv("MAILER_SENDER"),
  RESEND_API_KEY: getEnv("RESEND_API_KEY"),
  LOGTAIL_SOURCE_TOKEN: getEnv("LOGTAIL_SOURCE_TOKEN"),
  LOGTAIL_INGEST_ENDPOINT: getEnv("LOGTAIL_INGEST_ENDPOINT"),
  RATE_LIMIT: {
    WINDOW_MS: getEnv("RATE_LIMIT_WINDOW_MS", "60000"),
    MAX: getEnv("RATE_LIMIT_MAX", "100"),
    MESSAGE: getEnv("RATE_LIMIT_MESSAGE", "Too many requests, please try again later."),
    TRUST_PROXY: getEnv("RATE_LIMIT_TRUST_PROXY", "false"),
  },
  SWAGGER_UI_ENABLED: getEnv("SWAGGER_UI_ENABLED", "true"),
});

export const config = appConfig();
