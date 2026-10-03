import express from "express";
import { adminController } from "./admin.controller.js";
import { adminLoginValidation } from "./admin.validation.js";
import { validate } from "../../middlewares/validator.middleware.js";
import { sanitizeInputs } from "../../middlewares/sanitize.middleware.js";
import { adminLoginLimiter } from "../../middlewares/rateLimit.middleware.js";
import { adminAuth } from "../../middlewares/adminAuth.middleware.js";
import { requireRole } from "../../middlewares/roles.middleware.js";

import contentRoutes from "../content/content.routes.js";
import productsRoutes from "../products/products.routes.js";
import dashboardRoutes from "../admin/dashboard.routes.js";

const router = express.Router();

/* -----------------------------
   RUTA PÚBLICA DEL PANEL ADMIN
----------------------------- */
router.post(
  "/login",
  adminLoginLimiter,
  sanitizeInputs,
  adminLoginValidation,
  validate,
  adminController.login
);

/* -----------------------------
   RUTAS PROTEGIDAS (requieren token)
----------------------------- */
router.use(adminAuth);

/* -----------------------------
   RUTAS DEL PANEL ADMIN
----------------------------- */

// Contenido (admin + editor)
router.use("/content", requireRole(["admin", "editor"]), contentRoutes);

// Productos (admin + editor)
router.use("/products", requireRole(["admin", "editor"]), productsRoutes);

// Dashboard (solo admin)
router.use("/dashboard", requireRole(["admin"]), dashboardRoutes);

export default router;
