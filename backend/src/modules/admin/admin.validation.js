import { body } from "express-validator";

export const adminLoginValidation = [
  body("email")
    .trim()
    .isEmail().withMessage("El email ingresado no es válido")
    .isLength({ max: 100 }).withMessage("El email es demasiado largo"),

  body("password")
    .trim()
    .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres")
];
