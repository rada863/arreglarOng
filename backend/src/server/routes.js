import express from "express";

import authRoutes from "../modules/auth/auth.routes.js";
import productsRoutes from "../modules/products/products.routes.js";
import contactRoutes from "../modules/contact/routes.js";
import blogRoutes from "../modules/blog/blog.routes.js";
import cartRoutes from "../modules/cart/cart.routes.js";
import paymentsRoutes from "../modules/payments/payments.routes.js";
import ordersRoutes from "../modules/orders/orders.routes.js";

const router = express.Router();

/* -----------------------------
   RUTAS PÚBLICAS
----------------------------- */
router.use("/auth", authRoutes);
router.use("/productos", productsRoutes);
router.use("/contacto", contactRoutes);
router.use("/posts", blogRoutes);
router.use("/carrito", cartRoutes);
router.use("/pagos", paymentsRoutes);
router.use("/orders", ordersRoutes);

/* -----------------------------
   HEALTH CHECK
----------------------------- */
router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default router;
