import { param, query, body } from "express-validator";

const validMethods = ["cuenta_dni", "transferencia"];

/* -----------------------------------------
   VALIDAR MÉTODO DE PAGO EN PARAMS
----------------------------------------- */
export const paymentMethodParamValidation = [
  param("method")
    .trim()
    .notEmpty().withMessage("El método de pago es obligatorio")
    .isIn(validMethods)
    .withMessage("Método de pago inválido")
];

/* -----------------------------------------
   VALIDAR MÉTODO DE PAGO EN QUERY
----------------------------------------- */
export const paymentMethodQueryValidation = [
  query("method")
    .optional()
    .trim()
    .isIn(validMethods)
    .withMessage("Método de pago inválido")
];

/* -----------------------------------------
   VALIDAR MÉTODO DE PAGO EN BODY (POST)
----------------------------------------- */
export const paymentMethodBodyValidation = [
  body("paymentMethod")
    .trim()
    .notEmpty().withMessage("El método de pago es obligatorio")
    .isIn(validMethods)
    .withMessage("Método de pago inválido")
];
