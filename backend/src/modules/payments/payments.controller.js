import { paymentConfig } from "../../config/payments.js";
import { successResponse } from "../../utils/response.js";
import { logger } from "../../utils/logger.js";

export const paymentsController = {
  getMethods(req, res, next) {
    try {
      logger.info("Métodos de pago consultados", {
        ip: req.ip,
        userId: req.user?.id,
        adminId: req.admin?.id
      });

      return successResponse(
        res,
        paymentConfig,
        "Métodos de pago disponibles"
      );
    } catch (err) {
      next(err);
    }
  }
};
