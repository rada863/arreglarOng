import { logsService } from "../modules/admin/logs/logs.service.js";

export const adminLog = (action) => {
  return async (req, res, next) => {
    try {
      // Validar que exista req.admin
      if (!req.admin || !req.admin.id) {
        console.warn("adminLog: req.admin no está definido. ¿Falta adminAuth?");
        return next();
      }

      // Filtrar body para evitar guardar contraseñas o tokens
      const safeBody = { ...req.body };
      if (safeBody.password) safeBody.password = "***";
      if (safeBody.token) safeBody.token = "***";

      await logsService.register(
        req.admin.id,
        action,
        {
          body: safeBody,
          method: req.method,
          url: req.originalUrl
        },
        req
      );
    } catch (err) {
      console.error("Error registrando log:", err);
    }

    next();
  };
};
