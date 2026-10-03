import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./products.controller.js";

const router = Router();

// GET todos los productos
router.get("/", getProducts);

// GET producto por ID
router.get("/:id", getProductById);

// POST crear producto
router.post("/", createProduct);

// PUT actualizar producto
router.put("/:id", updateProduct);

// DELETE eliminar producto
router.delete("/:id", deleteProduct);

export default router;
