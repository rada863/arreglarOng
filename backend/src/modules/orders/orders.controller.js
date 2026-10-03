import { ordersService } from "./orders.service.js";
import { successResponse, errorResponse } from "../../utils/response.js";
import { logger } from "../../utils/logger.js";

export const ordersController = {
  /* -----------------------------------------
     CREAR ORDEN (USUARIO)
  ----------------------------------------- */
  async createOrder(req, res, next) {
    try {
      const order = await ordersService.createOrder({
        userId: req.user.id,
        items: req.body.items,
        total: req.body.total,
        paymentMethod: req.body.paymentMethod,
        shippingAddress: req.body.shippingAddress,
        notes: req.body.notes
      });

      logger.info("Orden creada", {
        userId: req.user.id,
        ip: req.ip,
        orderId: order._id
      });

      return successResponse(res, order, "Orden creada correctamente", 201);
    } catch (err) {
      next(err);
    }
  },

  /* -----------------------------------------
     OBTENER MIS ÓRDENES (USUARIO)
  ----------------------------------------- */
  async getMyOrders(req, res, next) {
    try {
      const orders = await ordersService.getOrdersByUser(req.user.id);

      logger.info("Órdenes del usuario obtenidas", {
        userId: req.user.id,
        ip: req.ip,
        count: orders.length
      });

      return successResponse(res, orders, "Órdenes del usuario");
    } catch (err) {
      next(err);
    }
  },

  /* -----------------------------------------
     OBTENER ORDEN POR ID (USUARIO)
  ----------------------------------------- */
  async getOrderById(req, res, next) {
    try {
      const order = await ordersService.getOrderById(req.params.id);

      if (!order) {
        return errorResponse(res, "Orden no encontrada", 404);
      }

      logger.info("Orden obtenida por ID", {
        userId: req.user?.id,
        ip: req.ip,
        orderId: req.params.id
      });

      return successResponse(res, order, "Orden encontrada");
    } catch (err) {
      next(err);
    }
  },

  /* -----------------------------------------
     OBTENER TODAS LAS ÓRDENES (ADMIN)
  ----------------------------------------- */
  async getAllOrders(req, res, next) {
    try {
      const orders = await ordersService.getAllOrders(req.query);

      logger.info("Órdenes listadas (admin)", {
        adminId: req.admin?.id,
        ip: req.ip,
        count: orders.length
      });

      return successResponse(res, orders, "Órdenes obtenidas");
    } catch (err) {
      next(err);
    }
  },

  /* -----------------------------------------
     ACTUALIZAR ESTADO DE ORDEN (ADMIN)
  ----------------------------------------- */
  async updateStatus(req, res, next) {
    try {
      const order = await ordersService.updateStatus(
        req.params.id,
        req.body.status
      );

      if (!order) {
        return errorResponse(res, "Orden no encontrada", 404);
      }

      logger.warn("Estado de orden actualizado", {
        adminId: req.admin?.id,
        ip: req.ip,
        orderId: req.params.id,
        newStatus: req.body.status
      });

      return successResponse(res, order, "Estado actualizado");
    } catch (err) {
      next(err);
    }
  },

  /* -----------------------------------------
     CONFIRMAR PAGO MANUAL (ADMIN)
  ----------------------------------------- */
  async confirmPayment(req, res, next) {
    try {
      const { notes } = req.body;
      const proof = req.file ? `/uploads/${req.file.filename}` : null;

      const order = await ordersService.confirmPayment(
        req.params.id,
        proof,
        notes
      );

      if (!order) {
        return errorResponse(res, "Orden no encontrada", 404);
      }

      logger.warn("Pago confirmado (manual)", {
        adminId: req.admin?.id,
        ip: req.ip,
        orderId: req.params.id,
        proof,
        notes
      });

      return successResponse(res, order, "Pago confirmado correctamente");
    } catch (err) {
      next(err);
    }
  }
};
