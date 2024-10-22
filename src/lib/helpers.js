import rateLimit from "express-rate-limit";
import setting from "../config/setting.js";

const { ALLOWED_ORIGIN } = setting;

export const corsConfig = {
  origin: ALLOWED_ORIGIN,
};

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
