import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 120
    },

    phone: {
      type: String,
      trim: true,
      maxlength: 20,
      default: null
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 1000
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
      index: true
    },

    ip: {
      type: String,
      trim: true,
      default: null
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

/* -----------------------------------------
   LIMPIAR RESPUESTA JSON
----------------------------------------- */
contactSchema.methods.toJSON = function () {
  const obj = this.toObject();
  return obj;
};

/* -----------------------------------------
   ÍNDICES ADICIONALES
----------------------------------------- */
contactSchema.index({ createdAt: -1 });
contactSchema.index({ email: 1 });

export const Contact = mongoose.model("Contact", contactSchema);
