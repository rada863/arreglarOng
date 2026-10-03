import { profileService } from "./profile.service.js";
import { successResponse, errorResponse } from "../../../utils/response.js";
import { logger } from "../../../utils/logger.js";

export const profileController = {
  async getProfile(req, res, next) {
    try {
      const profile = await profileService.getProfile(req.admin.id);

      logger.info("Perfil del admin obtenido", {
        adminId: req.admin.id,
        ip: req.ip
      });

      return successResponse(res, profile, "Perfil del administrador");
    } catch (err) {
      next(err);
    }
  },

  async changePassword(req, res, next) {
    try {
      const { oldPassword, newPassword } = req.body;

      await profileService.changePassword(
        req.admin.id,
        oldPassword,
        newPassword,
        req
      );

      logger.warn("Contraseña del admin cambiada", {
        adminId: req.admin.id,
        ip: req.ip,
        userAgent: req.headers["user-agent"]
      });

      return successResponse(res, null, "Contraseña actualizada correctamente");
    } catch (err) {
      next(err);
    }
  }
};
