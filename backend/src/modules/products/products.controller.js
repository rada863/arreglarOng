import * as productService from "./products.service.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await productService.getProducts();
    res.json({ ok: true, data: products });
  } catch (err) {
    next(err);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);

    if (!product) {
      return res.status(404).json({ ok: false, error: "Producto no encontrado" });
    }

    res.json({ ok: true, data: product });
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json({ ok: true, data: product });
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);

    if (!product) {
      return res.status(404).json({ ok: false, error: "Producto no encontrado" });
    }

    res.json({ ok: true, data: product });
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const deleted = await productService.deleteProduct(req.params.id);

    if (!deleted) {
      return res.status(404).json({ ok: false, error: "Producto no encontrado" });
    }

    res.json({ ok: true, message: "Producto eliminado correctamente" });
  } catch (err) {
    next(err);
  }
};
