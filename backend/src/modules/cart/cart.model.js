import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
      max: 50 // evita spam y ataques
    },

    price: {
      type: Number,
      required: true,
      min: 0
    }
  },
  { _id: false }
);

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    items: {
      type: [cartItemSchema],
      default: []
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

/* -----------------------------------------
   VALIDACIÓN: CARRITO NO PUEDE TENER ITEMS INVALIDOS
----------------------------------------- */
cartSchema.pre("validate", function (next) {
  if (!this.items) {
    this.items = [];
  }

  // Evitar items vacíos o corruptos
  this.items = this.items.filter(
    (item) => item.productId && item.quantity > 0
  );

  next();
});

/* -----------------------------------------
   LIMPIAR RESPUESTA JSON
----------------------------------------- */
cartSchema.methods.toJSON = function () {
  const obj = this.toObject();
  return obj;
};

/* -----------------------------------------
   ÍNDICES ADICIONALES
----------------------------------------- */
cartSchema.index({ createdAt: -1 });

export const Cart = mongoose.model("Cart", cartSchema);
