import { Cart } from "./cart.model.js";
import Product from "../../../database/models/Product.js";


export const cartService = {
  /* -----------------------------------------
     OBTENER CARRITO DEL USUARIO
  ----------------------------------------- */
  async getCart(userId) {
    let cart = await Cart.findOne({ userId })
      .populate("items.productId")
      .lean();

    if (!cart) {
      cart = await Cart.create({ userId, items: [] });
      return cart;
    }

    return cart;
  },

  /* -----------------------------------------
     AGREGAR PRODUCTO AL CARRITO
  ----------------------------------------- */
  async addToCart(userId, productId, quantity = 1) {
    // Validar producto
    const product = await Product.findById(productId).lean();

    if (!product) {
      const error = new Error("Producto no encontrado");
      error.status = 404;
      throw error;
    }

    if (product.stock <= 0) {
      const error = new Error("Producto sin stock");
      error.status = 400;
      throw error;
    }

    // Obtener carrito
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({ userId, items: [] });
    }

    // Buscar si ya existe en el carrito
    const item = cart.items.find(
      (i) => i.productId.toString() === productId
    );

    if (item) {
      item.quantity += quantity;

      // Validar stock
      if (item.quantity > product.stock) {
        const error = new Error("Cantidad supera el stock disponible");
        error.status = 400;
        throw error;
      }
    } else {
      cart.items.push({
        productId,
        quantity,
        price: product.price // precio real desde BD
      });
    }

    await cart.save();

    return await Cart.findOne({ userId })
      .populate("items.productId")
      .lean();
  },

  /* -----------------------------------------
     REMOVER PRODUCTO DEL CARRITO
  ----------------------------------------- */
  async removeFromCart(userId, productId) {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      const error = new Error("Carrito no encontrado");
      error.status = 404;
      throw error;
    }

    cart.items = cart.items.filter(
      (i) => i.productId.toString() !== productId
    );

    await cart.save();

    return await Cart.findOne({ userId })
      .populate("items.productId")
      .lean();
  },

  /* -----------------------------------------
     LIMPIAR CARRITO COMPLETO
  ----------------------------------------- */
  async clearCart(userId) {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      const error = new Error("Carrito no encontrado");
      error.status = 404;
      throw error;
    }

    cart.items = [];
    await cart.save();

    return await Cart.findOne({ userId }).lean();
  },

  /* -----------------------------------------
     RECALCULAR TOTAL (para órdenes)
  ----------------------------------------- */
  async calculateTotal(userId) {
    const cart = await Cart.findOne({ userId })
      .populate("items.productId")
      .lean();

    if (!cart) {
      const error = new Error("Carrito no encontrado");
      error.status = 404;
      throw error;
    }

    const total = cart.items.reduce((acc, item) => {
      return acc + item.quantity * item.productId.price;
    }, 0);

    return total;
  }
};
