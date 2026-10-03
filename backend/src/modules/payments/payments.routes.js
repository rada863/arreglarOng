import express from "express";
import { paymentsController } from "./payments.controller.js";
import { sanitizeInputs } from "../../middlewares/sanitize.middleware.js";

const router = express.Router();

/* -----------------------------
   MÉTODOS DE PAGO (PÚBLICO)
----------------------------- */
router.get(
  "/methods",
  sanitizeInputs,
  paymentsController.getMethods
);

export default router;
