import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 120,
    },

    password: {
      type: String,
      required: true,
      select: false, // 🔥 seguridad: nunca se devuelve por defecto
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    // Preparado para futuras features
    emailVerified: {
      type: Boolean,
      default: false,
    },

    resetToken: {
      type: String,
      default: null,
    },

    resetTokenExp: {
      type: Date,
      default: null,
    },

    active: {
      type: Boolean,
      default: true, // suspender usuario sin borrarlo
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password; // 🔥 seguridad extra
        delete ret.resetToken;
        delete ret.resetTokenExp;
        return ret;
      },
    },
  }
);

// Índice para búsquedas rápidas
AuthSchema.index({ email: 1 });

export const User = mongoose.model("User", AuthSchema);
