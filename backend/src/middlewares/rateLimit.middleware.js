import rateLimit from "express-rate-limit";
import { logger } from "../utils/logger.js";

export const adminLoginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutos
  max: 10, // máximo 10 intentos
  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res) => {
    logger.warn("Rate limit activado en login admin", {
      ip: req.ip,
      path: req.originalUrl,
      method: req.method,
      body: req.body,
    });

    return res.status(429).json({
      ok: false,
      error: "Demasiados intentos, espere unos minutos.",
    });
  }
});
