import express from "express";
import { usersController } from "./users.controller.js";
import { createUserValidation, updateUserValidation } from "./users.validation.js";
import { validate } from "../../middlewares/validator.middleware.js";
import { adminAuth } from "../../middlewares/adminAuth.middleware.js";
import { requireRole } from "../../middlewares/roles.middleware.js";
import { sanitizeInputs } from "../../middlewares/sanitize.middleware.js";

const router = express.Router();

/* -----------------------------
   RUTAS PROTEGIDAS (solo admin)
----------------------------- */
router.use(adminAuth);
router.use(requireRole(["admin"]));

/* -----------------------------
   CRUD de usuarios
----------------------------- */
router.get("/", usersController.getAll);
router.get("/:id", usersController.getById);

router.post(
  "/",
  sanitizeInputs,
  createUserValidation,
  validate,
  usersController.create
);

router.put(
  "/:id",
  sanitizeInputs,
  updateUserValidation,
  validate,
  usersController.update
);

router.delete("/:id", usersController.remove);

export default router;
