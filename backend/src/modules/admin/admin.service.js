import { Admin } from "./admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { logger } from "../../utils/logger.js";

export const adminService = {
  async login(email, password) {
    // Buscar admin y traer password
    const admin = await Admin.findOne({ email })
      .select("+password")
      .lean();

    if (!admin) {
      logger.warn("Login admin fallido: email no encontrado", { email });
      return null;
    }

    // Verificar si está activo
    if (admin.active === false) {
      logger.warn("Login admin fallido: admin inactivo", { adminId: admin._id });
      return null;
    }

    // Comparar contraseña
    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      logger.warn("Login admin fallido: contraseña incorrecta", { adminId: admin._id });
      return null;
    }

    // Generar token
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.ADMIN_JWT_SECRET,
      { expiresIn: "1h" }
    );

    logger.info("Admin inició sesión", {
      adminId: admin._id,
      role: admin.role,
      email,
    });

    return {
      id: admin._id,
      role: admin.role,
      token,
    };
  },

  async createAdmin() {
    const error = new Error("Solo puede existir un administrador");
    error.status = 400;
    throw error;
  }
};
