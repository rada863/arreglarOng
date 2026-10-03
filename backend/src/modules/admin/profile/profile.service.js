import { Admin } from "../../../database/models/Admin.js";
import bcrypt from "bcrypt";
import { logger } from "../../../utils/logger.js";

export const profileService = {
  async getProfile(adminId) {
    const admin = await Admin.findById(adminId).lean();

    if (!admin) {
      const error = new Error("Admin no encontrado");
      error.status = 404;
      throw error;
    }

    return admin; // password ya está oculto por select:false
  },

  async changePassword(adminId, oldPassword, newPassword, req) {
    // Traer admin con password
    const admin = await Admin.findById(adminId).select("+password");

    if (!admin) {
      const error = new Error("Admin no encontrado");
      error.status = 404;
      throw error;
    }

    // Verificar si está activo
    if (admin.active === false) {
      const error = new Error("El administrador está inactivo");
      error.status = 403;
      throw error;
    }

    // Comparar contraseña actual
    const match = await bcrypt.compare(oldPassword, admin.password);
    if (!match) {
      const error = new Error("La contraseña actual es incorrecta");
      error.status = 400;
      throw error;
    }

    // Hashear nueva contraseña
    const hashed = await bcrypt.hash(newPassword, 10);
    admin.password = hashed;

    await admin.save();

    logger.warn("Contraseña del admin cambiada", {
      adminId,
      ip: req.ip,
      userAgent: req.headers["user-agent"]
    });

    return true;
  }
};
