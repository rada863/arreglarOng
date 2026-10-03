import express from "express";
import { AuthController } from "./auth.controller.js";
import { registerSchema, loginSchema } from "./auth.validation.js";
import { validateZod } from "../../middlewares/zod.middleware.js";
import { sanitize } from "../../utils/sanitize.js";
import rateLimit from "express-rate-limit";

const router = express.Router();

/**
 * Anti fuerza bruta en login
 */
const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 10, // máximo 10 intentos por IP
  message: {
    ok: false,
    message: "Demasiados intentos de login, intenta nuevamente en un minuto.",
  },
});

/**
 * Sanitización de params (por si en el futuro agregás /auth/:id)
 */
router.param("id", (req, _, next, value) => {
  req.params.id = sanitize(value);
  next();
});

/**
 * Registro de usuario
 */
router.post(
  "/register",
  validateZod(registerSchema),
  AuthController.register
);

/**
 * Login con rate‑limit
 */
router.post(
  "/login",
  loginLimiter,
  validateZod(loginSchema),
  AuthController.login
);

export default router;
