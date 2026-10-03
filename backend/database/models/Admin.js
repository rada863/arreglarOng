import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 120,
      index: true, // 🔥 búsquedas rápidas
    },

    password: {
      type: String,
      required: true,
      select: false, // 🔥 seguridad real
    },

    role: {
      type: String,
      enum: ["admin", "editor", "viewer"],
      default: "admin",
    },

    active: {
      type: Boolean,
      default: true, // suspender admin sin borrarlo
    },

    // Preparado para recuperación de contraseña
    resetToken: {
      type: String,
      default: null,
    },

    resetTokenExp: {
      type: Date,
      default: null,
    },

    // Preparado para verificación de email
    emailVerified: {
      type: Boolean,
      default: true, // los admins suelen estar verificados por defecto
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.resetToken;
        delete ret.resetTokenExp;
        return ret;
      },
    },
  }
);

// Índice compuesto para auditoría
AdminSchema.index({ role: 1, active: 1 });

export default mongoose.model("Admin", AdminSchema);
