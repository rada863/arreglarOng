import * as cartService from "./cart.service.js";
import { successResponse, errorResponse } from "../../utils/response.js";
import { logger } from "../../utils/logger.js";

export const cartController = {
  /* -----------------------------------------
     OBTENER CARRITO DEL USUARIO
  ----------------------------------------- */
  async getCart(req, res, next) {
    try {
      const cart = await cartService.getCart(req.user.id);

      logger.info("Carrito obtenido", {
        userId: req.user.id,
        ip: req.ip,
        items: cart.items?.length || 0
      });

      return successResponse(res, cart, "Carrito obtenido correctamente");
    } catch (err) {
      next(err);
    }
  },

  /* -----------------------------------------
     AGREGAR PRODUCTO AL CARRITO
  ----------------------------------------- */
  async addToCart(req, res, next) {
    try {
      const { productId, quantity } = req.body;

      const cart = await cartService.addToCart(
        req.user.id,
        productId,
        quantity
      );

      logger.warn("Producto agregado al carrito", {
        userId: req.user.id,
        ip: req.ip,
        productId,
        quantity
      });

      return successResponse(res, cart, "Producto agregado al carrito");
    } catch (err) {
      next(err);
    }
  },

  /* -----------------------------------------
     REMOVER PRODUCTO DEL CARRITO
  ----------------------------------------- */
  async removeFromCart(req, res, next) {
    try {
      const { productId } = req.body;

      const cart = await cartService.removeFromCart(
        req.user.id,
        productId
      );

      logger.warn("Producto eliminado del carrito", {
        userId: req.user.id,
        ip: req.ip,
        productId
      });

      return successResponse(res, cart, "Producto eliminado del carrito");
    } catch (err) {
      next(err);
    }
  },

  /* -----------------------------------------
     LIMPIAR CARRITO COMPLETO
  ----------------------------------------- */
  async clearCart(req, res, next) {
    try {
      const cart = await cartService.clearCart(req.user.id);

      logger.warn("Carrito limpiado", {
        userId: req.user.id,
        ip: req.ip
      });

      return successResponse(res, cart, "Carrito limpiado correctamente");
    } catch (err) {
      next(err);
    }
  }
};
