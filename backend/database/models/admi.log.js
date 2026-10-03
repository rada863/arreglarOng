import mongoose from "mongoose";

const AdminLogSchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
      index: true, // 🔥 búsquedas más rápidas
    },

    action: {
      type: String,
      required: true,
      trim: true,
    },

    details: {
      type: Object,
      default: {},
    },

    ip: {
      type: String,
      trim: true,
    },

    userAgent: {
      type: String,
      trim: true,
    },

    // Preparado para auditoría avanzada
    success: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

// Índice compuesto para análisis de logs
AdminLogSchema.index({ adminId: 1, createdAt: -1 });

export default mongoose.model("AdminLog", AdminLogSchema);
