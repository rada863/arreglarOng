import { AuthService } from "./auth.service.js";
import { sanitize } from "../../utils/sanitize.js";
import { successResponse } from "../../utils/response.js";
import { registerSchema, loginSchema } from "./auth.validation.js";

export const AuthController = {
  async register(req, res, next) {
    try {
      // Validación Zod
      const parsed = registerSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          ok: false,
          errors: parsed.error.flatten().fieldErrors,
        });
      }

      // Sanitización
      const cleanData = sanitize(parsed.data);

      const data = await AuthService.register(cleanData);
      return successResponse(res, data, "Usuario registrado");
    } catch (err) {
      next(err);
    }
  },

  async login(req, res, next) {
    try {
      // Validación Zod
      const parsed = loginSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          ok: false,
          errors: parsed.error.flatten().fieldErrors,
        });
      }

      // Sanitización
      const cleanData = sanitize(parsed.data);

      const data = await AuthService.login(cleanData);
      return successResponse(res, data, "Login exitoso");
    } catch (err) {
      next(err);
    }
  },
};
