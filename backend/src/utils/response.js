import { logger } from "../utils/logger.js";

/* -----------------------------
   RESPUESTA EXITOSA
----------------------------- */
export const successResponse = (
  res,
  data = null,
  message = "OK",
  status = 200,
  meta = {}
) => {
  logger.info("Success response", {
    status,
    message,
    meta,
  });

  return res.status(status).json({
    ok: true,
    message,
    data,
    meta,
  });
};

/* -----------------------------
   RESPUESTA DE ERROR
----------------------------- */
export const errorResponse = (
  res,
  error = "Error interno del servidor",
  status = 500,
  meta = {}
) => {
  logger.error("Error response", {
    status,
    error,
    meta,
  });

  return res.status(status).json({
    ok: false,
    error,
    meta,
  });
};
