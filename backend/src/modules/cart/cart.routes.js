import express from "express";
import { cartController } from "./cart.controller.js";
import { userAuth } from "../../middlewares/userAuth.middleware.js";
import { sanitizeInputs } from "../../middlewares/sanitize.middleware.js";
import { validateZod } from "../../middlewares/zod.middleware.js";
import {
  addToCartSchema,
  removeFromCartSchema,
  clearCartSchema
} from "./cart.validation.js";

const router = express.Router();

/* -----------------------------------------
   OBTENER CARRITO DEL USUARIO
----------------------------------------- */
router.get(
  "/",
  userAuth,
  sanitizeInputs,
  cartController.getCart
);

/* -----------------------------------------
   AGREGAR PRODUCTO AL CARRITO
----------------------------------------- */
router.post(
  "/add",
  userAuth,
  sanitizeInputs,
  validateZod(addToCartSchema),
  cartController.addToCart
);

/* -----------------------------------------
   REMOVER PRODUCTO DEL CARRITO
----------------------------------------- */
router.post(
  "/remove",
  userAuth,
  sanitizeInputs,
  validateZod(removeFromCartSchema),
  cartController.removeFromCart
);

/* -----------------------------------------
   LIMPIAR CARRITO COMPLETO
----------------------------------------- */
router.post(
  "/clear",
  userAuth,
  sanitizeInputs,
  validateZod(clearCartSchema),
  cartController.clearCart
);

export default router;
