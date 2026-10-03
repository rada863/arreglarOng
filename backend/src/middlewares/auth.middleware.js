import { verifyToken } from "../utils/jwt.js";
import User from "../modules/users/user.model.js"; // opcional si querés validar existencia

export const authMiddleware = async (req, res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({
      ok: false,
      error: "Token de autenticación requerido",
    });
  }

  const token = header.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      ok: false,
      error: "Token inválido",
    });
  }

  try {
    const payload = verifyToken(token);

    if (!payload || !payload.id) {
      return res.status(401).json({
        ok: false,
        error: "Token inválido o corrupto",
      });
    }

    // Validar que el usuario exista (opcional pero recomendado)
    const user = await User.findById(payload.id).lean();
    if (!user) {
      return res.status(401).json({
        ok: false,
        error: "Usuario no encontrado",
      });
    }

    req.user = {
      id: user._id.toString(),
      role: user.role || "user",
    };

    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      error: "Token inválido o expirado",
    });
  }
};
