import express from "express";
import { profileController } from "./profile.controller.js";
import { changePasswordValidation } from "./profile.validation.js";
import { validate } from "../../../middlewares/validator.middleware.js";
import { sanitizeInputs } from "../../../middlewares/sanitize.middleware.js";
import { adminAuth } from "../../../middlewares/adminAuth.middleware.js";
import { requireRole } from "../../../middlewares/roles.middleware.js";

const router = express.Router();

/* -----------------------------
   RUTAS PROTEGIDAS DEL PANEL ADMIN
----------------------------- */
router.use(adminAuth);                // requiere token de admin
router.use(requireRole(["admin"]));   // solo admin puede acceder

/* -----------------------------
   OBTENER PERFIL DEL ADMIN
----------------------------- */
router.get("/", profileController.getProfile);

/* -----------------------------
   CAMBIAR CONTRASEÑA DEL ADMIN
----------------------------- */
router.put(
  "/password",
  sanitizeInputs,
  changePasswordValidation,
  validate,
  profileController.changePassword
);

export default router;
