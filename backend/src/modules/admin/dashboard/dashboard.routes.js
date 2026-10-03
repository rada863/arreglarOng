import express from "express";
import { dashboardController } from "./dashboard.controller.js";
import { adminAuth } from "../../../middlewares/adminAuth.middleware.js";
import { requireRole } from "../../../middlewares/roles.middleware.js";
import { sanitizeInputs } from "../../../middlewares/sanitize.middleware.js";

const router = express.Router();

/* -----------------------------
   RUTAS PROTEGIDAS DEL PANEL ADMIN
----------------------------- */
router.use(adminAuth);                // requiere token de admin
router.use(requireRole(["admin"]));   // solo admin puede acceder

/* -----------------------------
   DASHBOARD DEL PANEL ADMIN
----------------------------- */
router.get("/", sanitizeInputs, dashboardController.getDashboard);

export default router;
