import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

/* -----------------------------
   TOKEN PARA USUARIOS
----------------------------- */
export const signToken = (payload, options = {}) => {
  return jwt.sign(payload, env.jwtSecret, {
    algorithm: "HS256",
    expiresIn: options.expiresIn || "1h",
  });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, env.jwtSecret);
  } catch (err) {
    return null; // evita romper el servidor
  }
};

/* -----------------------------
   TOKEN PARA ADMIN
----------------------------- */
export const signAdminToken = (payload, options = {}) => {
  return jwt.sign(payload, env.adminJwtSecret, {
    algorithm: "HS256",
    expiresIn: options.expiresIn || "1h",
  });
};

export const verifyAdminToken = (token) => {
  try {
    return jwt.verify(token, env.adminJwtSecret);
  } catch (err) {
    return null;
  }
};
