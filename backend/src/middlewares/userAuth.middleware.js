import jwt from "jsonwebtoken";
import { errorResponse } from "../utils/response.js";

/**
 * Autenticación de usuario (JWT)
 * - Verifica token
 * - Decodifica payload
 * - Adjunta req.user
 * - Maneja errores de forma consistente
 */
export const userAuth = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return errorResponse(res, "Token requerido", 401);
    }

    const token = header.split(" ")[1];

    if (!token) {
      return errorResponse(res, "Token inválido", 401);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Adjuntar usuario al request
    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role || "user"
    };

    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return errorResponse(res, "Token expirado", 401);
    }

    if (err.name === "JsonWebTokenError") {
      return errorResponse(res, "Token inválido", 401);
    }

    return errorResponse(res, "Error de autenticación", 401);
  }
};
