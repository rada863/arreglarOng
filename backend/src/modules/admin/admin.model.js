import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 100
    },

    password: {
      type: String,
      required: true,
      select: false // 🔥 seguridad: nunca se devuelve por defecto
    },

    role: {
      type: String,
      enum: ["admin"], // modo single-admin
      default: "admin"
    },

    active: {
      type: Boolean,
      default: true // permite suspender admin sin borrarlo
    }
  },
  {
    timestamps: true
  }
);

/* -----------------------------
   Métodos y hooks profesionales
----------------------------- */

// Evitar que el password aparezca en JSON
AdminSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

// Index para búsquedas rápidas
AdminSchema.index({ email: 1 });

export const Admin = mongoose.model("Admin", AdminSchema);
