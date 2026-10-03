import { body } from "express-validator";

export const changePasswordValidation = [
  body("oldPassword")
    .trim()
    .notEmpty().withMessage("La contraseña actual es requerida"),

  body("newPassword")
    .trim()
    .isLength({ min: 6 }).withMessage("La nueva contraseña debe tener al menos 6 caracteres")
    .isLength({ max: 100 }).withMessage("La nueva contraseña es demasiado larga")
    .custom((value, { req }) => {
      if (value === req.body.oldPassword) {
        throw new Error("La nueva contraseña debe ser diferente a la actual");
      }
      return true;
    })
];
