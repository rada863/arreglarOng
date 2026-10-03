import { body } from "express-validator";

/* -----------------------------
   VALIDACIÓN PARA CREAR USUARIO
----------------------------- */
export const createUserValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("El nombre es requerido")
    .isLength({ min: 2 }).withMessage("El nombre es demasiado corto"),

  body("email")
    .trim()
    .isEmail().withMessage("Email inválido")
    .isLength({ max: 100 }).withMessage("Email demasiado largo"),

  body("password")
    .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),

  body("role")
    .optional()
    .isIn(["user", "admin"]).withMessage("Rol inválido"),

  body("avatar")
    .optional()
    .isURL().withMessage("El avatar debe ser una URL válida"),
];

/* -----------------------------
   VALIDACIÓN PARA ACTUALIZAR USUARIO
----------------------------- */
export const updateUserValidation = [
  body("name")
    .optional()
    .trim()
    .notEmpty().withMessage("El nombre no puede estar vacío")
    .isLength({ min: 2 }).withMessage("El nombre es demasiado corto"),

  body("email")
    .optional()
    .trim()
    .isEmail().withMessage("Email inválido")
    .isLength({ max: 100 }).withMessage("Email demasiado largo"),

  body("password")
    .optional()
    .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),

  body("role")
    .optional()
    .isIn(["user", "admin"]).withMessage("Rol inválido"),

  body("avatar")
    .optional()
    .isURL().withMessage("El avatar debe ser una URL válida"),
];
