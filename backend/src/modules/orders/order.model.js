import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true
        },
        quantity: {
          type: Number,
          required: true,
          min: 1
        },
        price: {
          type: Number,
          required: true,
          min: 0
        }
      }
    ],

    total: {
      type: Number,
      required: true,
      min: 1
    },

    paymentMethod: {
      type: String,
      enum: ["cuenta_dni", "transferencia"],
      required: true,
      lowercase: true,
      trim: true
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
      index: true
    },

    paymentProof: {
      type: String,
      default: null,
      trim: true
    },

    paymentNotes: {
      type: String,
      default: "",
      trim: true,
      maxlength: 500
    },

    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
      index: true
    },

    shippingAddress: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300
    },

    notes: {
      type: String,
      default: "",
      trim: true,
      maxlength: 500
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

/* -----------------------------
   Validación de items
----------------------------- */
OrderSchema.pre("validate", function (next) {
  if (!this.items || this.items.length === 0) {
    const error = new Error("La orden debe contener al menos un producto");
    error.status = 400;
    return next(error);
  }
  next();
});

/* -----------------------------
   Limpiar respuesta JSON
----------------------------- */
OrderSchema.methods.toJSON = function () {
  const obj = this.toObject();
  return obj;
};

/* -----------------------------
   Índices adicionales
----------------------------- */
OrderSchema.index({ createdAt: -1 });

export default mongoose.model("Order", OrderSchema);

