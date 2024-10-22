import { config } from "dotenv";

config();

export default {
  PORT: process.env.PORT || 0,
  ORIGIN_CORS: process.env.ALLOWED_ORIGIN || "*",
  PUB_KEY_PATH: process.env.PUB_KEY_PATH || "",
  URL: process.env.URL || `http://localhost:${process.env.PORT}`,
};
