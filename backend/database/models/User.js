import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
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
      index: true, // 🔥 login más rápido
    },

    password: {
      type: String,
      required: true,
      select: false, // 🔥 seguridad real
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    active: {
      type: Boolean,
      default: true, // suspender sin borrar
    },

    // Preparado para verificación de email
    emailVerified: {
      type: Boolean,
      default: false,
    },

    // Recuperación de contraseña
    resetToken: {
      type: String,
      default: null,
    },

    resetTokenExp: {
      type: Date,
      default: null,
    },

    // Datos opcionales del usuario
    phone: {
      type: String,
      trim: true,
      default: null,
    },

    address: {
      type: String,
      trim: true,
      default: null,
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

// Índice compuesto para dashboards
UserSchema.index({ role: 1, active: 1 });

export default mongoose.model("User", UserSchema);
