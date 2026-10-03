import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { env } from "../config/env.js";
import { connectDB } from "../config/db.js";
import router from "./routes.js";
import { errorMiddleware } from "../middlewares/error.middleware.js";
import { sanitizeInputs } from "../middlewares/sanitize.middleware.js";

const app = express();

/* -----------------------------
   PARSERS
----------------------------- */
app.use(express.json());

/* -----------------------------
   SANITIZACIÓN
----------------------------- */
app.use(sanitizeInputs);

/* -----------------------------
   CORS (nivel medio)
----------------------------- */
const allowedOrigins = [
  "https://tu-frontend.com",
  "https://tu-admin.com",
  "http://localhost:3000",
  "http://localhost:5173"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, origin);
      }
      return callback(new Error("Origen no permitido por CORS"), false);
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

/* -----------------------------
   HELMET (config nivel medio)
----------------------------- */
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: "same-origin" },
    crossOriginOpenerPolicy: { policy: "same-origin" },
    crossOriginEmbedderPolicy: false,
  })
);

/* -----------------------------
   RATE LIMIT
----------------------------- */
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Demasiadas solicitudes, intenta más tarde.",
  })
);

/* -----------------------------
   RUTAS
----------------------------- */
app.use("/api", router);

/* -----------------------------
   MANEJO GLOBAL DE ERRORES
----------------------------- */
app.use(errorMiddleware);

/* -----------------------------
   START SERVER
----------------------------- */
const startServer = async () => {
  await connectDB();

  app.listen(env.port, () => {
    console.log(`🚀 Backend escuchando en puerto ${env.port}`);
  });
};

startServer();

export default app; // necesario para tests
