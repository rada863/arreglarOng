import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDB = async () => {
  try {
    if (!env.mongoUri) {
      throw new Error("Falta la variable MONGO_URI en env.js");
    }

    await mongoose.connect(env.mongoUri, {
      autoIndex: true,          // útil en desarrollo
      maxPoolSize: 10,          // conexiones simultáneas
      serverSelectionTimeoutMS: 5000,
    });

    console.log("🔥 Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error.message);
    process.exit(1);
  }
};

/**
 * Eventos de conexión (PRO)
 */
mongoose.connection.on("connected", () => {
  console.log("📡 MongoDB conectado");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ Error en MongoDB:", err);
});

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB desconectado");
});
