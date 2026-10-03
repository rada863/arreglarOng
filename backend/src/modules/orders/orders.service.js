import Order from "../../../database/models/Order.js";

export const ordersService = {
  /* -----------------------------------------
     CREAR ORDEN (USUARIO)
  ----------------------------------------- */
  async createOrder(data) {
    const order = new Order(data);
    return await order.save();
  },

  /* -----------------------------------------
     OBTENER ORDEN POR ID
  ----------------------------------------- */
  async getOrderById(id) {
    const order = await Order.findById(id)
      .populate("items.productId")
      .lean();

    return order;
  },

  /* -----------------------------------------
     OBTENER ÓRDENES DEL USUARIO
  ----------------------------------------- */
  async getOrdersByUser(userId) {
    return await Order.find({ userId })
      .sort({ createdAt: -1 })
      .populate("items.productId")
      .lean();
  },

  /* -----------------------------------------
     OBTENER TODAS LAS ÓRDENES (ADMIN)
     + filtros opcionales
  ----------------------------------------- */
  async getAllOrders(query = {}) {
    const filter = {};

    if (query.status) filter.status = query.status;
    if (query.paymentStatus) filter.paymentStatus = query.paymentStatus;
    if (query.paymentMethod) filter.paymentMethod = query.paymentMethod;

    return await Order.find(filter)
      .sort({ createdAt: -1 })
      .populate("userId", "name email")
      .lean();
  },

  /* -----------------------------------------
     ACTUALIZAR ESTADO DE ORDEN (ADMIN)
  ----------------------------------------- */
  async updateStatus(id, status) {
    const order = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    )
      .populate("items.productId")
      .lean();

    if (!order) {
      const error = new Error("Orden no encontrada");
      error.status = 404;
      throw error;
    }

    return order;
  },

  /* -----------------------------------------
     CONFIRMAR PAGO MANUAL (ADMIN)
  ----------------------------------------- */
  async confirmPayment(id, proof, notes) {
    const order = await Order.findById(id);

    if (!order) {
      const error = new Error("Orden no encontrada");
      error.status = 404;
      throw error;
    }

    order.paymentStatus = "paid";
    order.paymentProof = proof || null;
    order.paymentNotes = notes || "";
    order.status = "processing";

    await order.save();

    return await Order.findById(id)
      .populate("items.productId")
      .lean();
  }
};

