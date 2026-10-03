import jwt from "jsonwebtoken";

export const adminAuth = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({
      ok: false,
      error: "Token requerido"
    });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.ADMIN_JWT_SECRET);

    // Validar rol admin
    if (decoded.role !== "admin") {
      return res.status(403).json({
        ok: false,
        error: "Acceso denegado: se requiere rol administrador"
      });
    }

    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      ok: false,
      error: "Token inválido"
    });
  }
};
