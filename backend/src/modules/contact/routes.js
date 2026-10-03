import express from "express";
import { contactController } from "./contact.controller.js";
import { sanitizeInputs } from "../../middlewares/sanitize.middleware.js";
import { validateZod } from "../../middlewares/zod.middleware.js";
import { contactSchema } from "./contact.validation.js";
import { adminAuth } from "../../middlewares/adminAuth.middleware.js";
import rateLimit from "express-rate-limit";

const router = express.Router();

/* -----------------------------------------
   RATE LIMIT — ANTI-SPAM
----------------------------------------- */
const contactLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 3,              // máximo 3 mensajes por minuto
  message: {
    ok: false,
    message: "Demasiados intentos, por favor intentá más tarde."
  }
});

/* -----------------------------------------
   ENVIAR MENSAJE DE CONTACTO (PÚBLICO)
----------------------------------------- */
router.post(
  "/",
  contactLimiter,
  sanitizeInputs,
  validateZod(contactSchema),
  contactController.sendMessage
);

/* -----------------------------------------
   ADMIN: OBTENER TODOS LOS MENSAJES
----------------------------------------- */
router.get(
  "/admin",
  adminAuth,
  sanitizeInputs,
  contactController.getAll
);

/* -----------------------------------------
   ADMIN: OBTENER MENSAJE POR ID
----------------------------------------- */
router.get(
  "/admin/:id",
  adminAuth,
  sanitizeInputs,
  contactController.getById
);

/* -----------------------------------------
   ADMIN: ELIMINAR MENSAJE
----------------------------------------- */
router.delete(
  "/admin/:id",
  adminAuth,
  sanitizeInputs,
  contactController.remove
);

export default router;
