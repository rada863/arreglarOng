import { logger } from "../utils/logger.js";

export const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const isProd = process.env.NODE_ENV === "production";

  // Log detallado
  logger.error("Error en request", {
    path: req.originalUrl,
    method: req.method,
    ip: req.ip,
    body: req.body,
    message: err.message,
    stack: isProd ? undefined : err.stack,
  });

  // Respuesta consistente con toda tu API
  return res.status(status).json({
    ok: false,
    error: isProd ? "Error interno del servidor" : err.message,
    ...(isProd ? {} : { stack: err.stack }), // solo en desarrollo
  });
};
