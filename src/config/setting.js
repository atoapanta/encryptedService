import { config } from "dotenv";

config();

export default {
  PORT: process.env.PORT || 0,
  ORIGIN_CORS: process.env.ALLOWED_ORIGIN || "*",
  PUBLIC_KEY: process.env.PUBLIC_KEY || "",
  URL: process.env.URL || `http://localhost:${process.env.PORT}`,
};
