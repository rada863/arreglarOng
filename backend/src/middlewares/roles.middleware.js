import { logger } from "../utils/logger.js";

export const requireRole = (roles = []) => {
  return (req, res, next) => {
    // Validar que adminAuth haya corrido antes
    if (!req.admin || !req.admin.role) {
      return res.status(401).json({
        ok: false,
        error: "Autenticación requerida",
      });
    }

    // Validar rol
    if (!roles.includes(req.admin.role)) {
      logger.warn("Intento de acceso no autorizado", {
        ip: req.ip,
        path: req.originalUrl,
        method: req.method,
        role: req.admin.role,
        requiredRoles: roles,
      });

      return res.status(403).json({
        ok: false,
        error: "No autorizado: permisos insuficientes",
      });
    }

    next();
  };
};
