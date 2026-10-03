import express from "express";
import { ordersController } from "./orders.controller.js";
import { createOrderSchema } from "./order.validation.js";
import { validateZod } from "../../middlewares/zod.middleware.js";
import { sanitizeInputs } from "../../middlewares/sanitize.middleware.js";
import { userAuth } from "../../middlewares/userAuth.middleware.js";
import { adminAuth } from "../../middlewares/adminAuth.middleware.js";
import { requireRole } from "../../middlewares/roles.middleware.js";
import { uploadSingle } from "../../middlewares/upload.middleware.js";

const router = express.Router();

/* -----------------------------
   RUTAS DEL USUARIO
----------------------------- */
router.post(
  "/",
  userAuth,
  sanitizeInputs,
  validateZod(createOrderSchema),
  ordersController.createOrder
);

router.get(
  "/mine",
  userAuth,
  ordersController.getMyOrders
);

/* -----------------------------
   RUTAS DEL ADMIN
----------------------------- */
router.get(
  "/",
  adminAuth,
  requireRole(["admin"]),
  sanitizeInputs,
  ordersController.getAllOrders
);

router.get(
  "/:id",
  adminAuth,
  requireRole(["admin"]),
  sanitizeInputs,
  ordersController.getOrderById
);

router.put(
  "/:id/status",
  adminAuth,
  requireRole(["admin"]),
  sanitizeInputs,
  ordersController.updateStatus
);

/* -----------------------------
   CONFIRMACIÓN DE PAGO MANUAL (ADMIN)
----------------------------- */
router.put(
  "/:id/confirm-payment",
  adminAuth,
  requireRole(["admin"]),
  uploadSingle("proof"),
  sanitizeInputs,
  ordersController.confirmPayment
);

export default router;
