import express from "express";
import { contentController } from "./content.controller.js";
import { createContentValidation, updateContentValidation } from "./content.validation.js";
import { validate } from "../../../middlewares/validator.middleware.js";
import { sanitizeInputs } from "../../../middlewares/sanitize.middleware.js";
import { adminAuth } from "../../../middlewares/adminAuth.middleware.js";
import { requireRole } from "../../../middlewares/roles.middleware.js";

const router = express.Router();

/* -----------------------------
   RUTAS PROTEGIDAS DEL PANEL ADMIN
----------------------------- */
router.use(adminAuth);                          // requiere token de admin
router.use(requireRole(["admin", "editor"]));   // admin + editor pueden gestionar contenido

/* -----------------------------
   LISTAR CONTENIDO
----------------------------- */
router.get("/", sanitizeInputs, contentController.getAll);

/* -----------------------------
   OBTENER CONTENIDO POR ID
----------------------------- */
router.get("/:id", sanitizeInputs, contentController.getById);

/* -----------------------------
   CREAR CONTENIDO
----------------------------- */
router.post(
  "/",
  sanitizeInputs,
  createContentValidation,
  validate,
  contentController.create
);

/* -----------------------------
   ACTUALIZAR CONTENIDO
----------------------------- */
router.put(
  "/:id",
  sanitizeInputs,
  updateContentValidation,
  validate,
  contentController.update
);

/* -----------------------------
   ELIMINAR CONTENIDO
----------------------------- */
router.delete("/:id", sanitizeInputs, contentController.remove);

export default router;
