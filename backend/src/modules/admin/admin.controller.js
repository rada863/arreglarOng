import { adminService } from "./admin.service.js";
import { successResponse, errorResponse } from "../../utils/response.js";
import { logger } from "../../utils/logger.js";

export const adminController = {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const result = await adminService.login(email, password);

      if (!result) {
        logger.warn("Intento de login fallido en admin", {
          ip: req.ip,
          email,
        });

        return errorResponse(res, "Credenciales inválidas", 401);
      }

      logger.info("Admin inició sesión", {
        ip: req.ip,
        adminId: result.id,
        role: result.role,
      });

      return successResponse(res, {
        token: result.token,
        role: result.role,
      }, "Login exitoso");
    } catch (err) {
      next(err);
    }
  }
};
