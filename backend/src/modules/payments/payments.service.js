import { paymentConfig } from "../../config/payments.js";

export const paymentsService = {
  /* -----------------------------------------
     OBTENER TODOS LOS MÉTODOS DE PAGO
  ----------------------------------------- */
  getMethods() {
    return {
      available: paymentConfig.methods,
      defaultMethod: paymentConfig.defaultMethod || null
    };
  },

  /* -----------------------------------------
     VALIDAR MÉTODO DE PAGO
  ----------------------------------------- */
  validateMethod(method) {
    if (!method || typeof method !== "string") {
      const error = new Error("Método de pago requerido");
      error.status = 400;
      throw error;
    }

    const valid = paymentConfig.methods.some(m => m.key === method.trim());

    if (!valid) {
      const error = new Error("Método de pago inválido");
      error.status = 400;
      throw error;
    }

    return true;
  },

  /* -----------------------------------------
     OBTENER DETALLES DEL MÉTODO (QR, alias, CBU)
  ----------------------------------------- */
  getMethodDetails(method) {
    const found = paymentConfig.methods.find(m => m.key === method);

    if (!found) {
      const error = new Error("Método de pago no encontrado");
      error.status = 404;
      throw error;
    }

    return {
      key: found.key,
      label: found.label,
      type: found.type,
      alias: found.alias || null,
      cbu: found.cbu || null,
      qrImage: found.qrImage || null,
      instructions: found.instructions || null
    };
  },

  /* -----------------------------------------
     PREPARAR PAGO (para futuro Mercado Pago / Stripe)
  ----------------------------------------- */
  async preparePayment(method, order) {
    this.validateMethod(method);

    const config = this.getMethodDetails(method);

    // Placeholder para integración real
    if (config.type === "qr") {
      return {
        method,
        qrImage: config.qrImage,
        alias: config.alias,
        cbu: config.cbu,
        message: "Escaneá el QR o usá el alias para completar el pago"
      };
    }

    if (config.type === "bank") {
      return {
        method,
        alias: config.alias,
        cbu: config.cbu,
        bank: config.bank,
        message: "Realizá la transferencia y subí el comprobante"
      };
    }

    // Futuro: Mercado Pago Checkout Pro
    if (config.type === "mercado_pago") {
      return {
        method,
        redirectUrl: "https://www.mercadopago.com/checkout-pro/...",
        message: "Redirigiendo a Mercado Pago"
      };
    }

    // Futuro: Stripe
    if (config.type === "stripe") {
      return {
        method,
        clientSecret: "stripe_client_secret_here",
        message: "Iniciando pago con Stripe"
      };
    }

    const error = new Error("Método de pago no soportado");
    error.status = 400;
    throw error;
  }
};
