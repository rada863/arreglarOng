import { User } from "./user.model.js";
import bcrypt from "bcrypt";
import { logger } from "../../utils/logger.js";

export const usersService = {
  async getAll() {
    const users = await User.find().lean();

    logger.info("Usuarios obtenidos", { count: users.length });

    return users;
  },

  async getById(id) {
    const user = await User.findById(id).lean();

    logger.info("Usuario obtenido", { userId: id });

    return user;
  },

  async create(data) {
    // Verificar email duplicado
    const exists = await User.findOne({ email: data.email });
    if (exists) {
      const error = new Error("El email ya está registrado");
      error.status = 400;
      throw error;
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await User.create({
      ...data,
      password: hashedPassword,
    });

    logger.info("Usuario creado", { userId: user._id });

    return user.toJSON(); // elimina password
  },

  async update(id, data) {
    // Si viene password, hashearla
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const user = await User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    }).lean();

    logger.info("Usuario actualizado", { userId: id });

    return user;
  },

  async remove(id) {
    const user = await User.findByIdAndDelete(id);

    logger.warn("Usuario eliminado", { userId: id });

    return user;
  },
};
