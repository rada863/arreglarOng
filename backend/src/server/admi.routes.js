import express from "express";

import { adminAuth } from "../middlewares/adminAuth.middleware.js";
import { requireRole } from "../middlewares/roles.middleware.js";
import { sanitizeInputs } from "../middlewares/sanitize.middleware.js";
import { adminLog } from "../middlewares/adminLog.middleware.js";
import { adminLoginLimiter } from "../middlewares/rateLimit.middleware.js";

import adminRoutes from "../modules/admin/admin.routes.js";
import usersRoutes from "../modules/users/users.routes.js";
import contentRoutes from "../modules/content/content.routes.js";
import logsRoutes from "../modules/admin/logs/logs.routes.js";
import profileRoutes from "../modules/admin/profile/profile.routes.js";

const router = express.Router();

/* -----------------------------
   RUTAS PÚBLICAS DEL PANEL ADMIN
   (solo login)
----------------------------- */
router.use("/auth", adminLoginLimiter, sanitizeInputs, adminRoutes);

/* -----------------------------
   RUTAS PROTEGIDAS
   (requieren token de admin)
----------------------------- */
router.use(adminAuth);

/* Logs del admin (solo admin) */
router.use(
  "/logs",
  requireRole(["admin"]),
  adminLog("ver logs"),
  logsRoutes
);

/* Gestión de usuarios (solo admin) */
router.use(
  "/users",
  requireRole(["admin"]),
  adminLog("gestión de usuarios"),
  usersRoutes
);

/* Gestión de contenido (solo admin) */
router.use(
  "/content",
  requireRole(["admin"]),
  adminLog("gestión de contenido"),
  contentRoutes
);

/* Perfil del admin */
router.use(
  "/profile",
  requireRole(["admin"]),
  adminLog("gestión de perfil"),
  profileRoutes
);

export default router;
