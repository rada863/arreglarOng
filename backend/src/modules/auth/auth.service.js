import bcrypt from "bcrypt";
import { User } from "./auth.model.js";
import { signToken } from "../../utils/jwt.js";
import { sanitize } from "../../utils/sanitize.js";

export const AuthService = {
  /**
   * Registro de usuario
   */
  async register({ name, email, password }) {
    const cleanEmail = sanitize(email);

    // Verificar duplicado
    const exists = await User.findOne({ email: cleanEmail }).lean();
    if (exists) {
      const error = new Error("El email ya está registrado");
      error.status = 400;
      throw error;
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: sanitize(name),
      email: cleanEmail,
      password: hashedPassword,
    });

    const token = signToken({ id: user._id, role: user.role });

    return {
      user: user.toJSON(), // oculta password y tokens internos
      token,
    };
  },

  /**
   * Login de usuario
   */
  async login({ email, password }) {
    const cleanEmail = sanitize(email);

    // Seleccionar password explícitamente
    const user = await User.findOne({ email: cleanEmail })
      .select("+password")
      .lean();

    if (!user) {
      const error = new Error("Credenciales inválidas");
      error.status = 400;
      throw error;
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      const error = new Error("Credenciales inválidas");
      error.status = 400;
      throw error;
    }

    const token = signToken({ id: user._id, role: user.role });

    // Convertir manualmente porque usamos lean()
    const safeUser = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return { user: safeUser, token };
  },
};
