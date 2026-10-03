import { body } from "express-validator";

export const createContentValidation = [
  body("title")
    .trim()
    .notEmpty().withMessage("El título es requerido")
    .isLength({ min: 3 }).withMessage("El título es demasiado corto")
    .isLength({ max: 150 }).withMessage("El título es demasiado largo"),

  body("slug")
    .trim()
    .notEmpty().withMessage("El slug es requerido")
    .isLength({ min: 3 }).withMessage("El slug es demasiado corto")
    .isLength({ max: 150 }).withMessage("El slug es demasiado largo")
    .matches(/^[a-z0-9-]+$/).withMessage("El slug solo puede contener letras, números y guiones"),

  body("body")
    .trim()
    .notEmpty().withMessage("El contenido es requerido")
    .isLength({ min: 10 }).withMessage("El contenido es demasiado corto"),

  body("category")
    .optional()
    .trim()
    .isLength({ min: 3 }).withMessage("La categoría es demasiado corta")
    .isLength({ max: 50 }).withMessage("La categoría es demasiado larga"),

  body("published")
    .optional()
    .isBoolean().withMessage("El campo 'published' debe ser booleano")
];

export const updateContentValidation = [
  body("title")
    .optional()
    .trim()
    .isLength({ min: 3 }).withMessage("El título es demasiado corto")
    .isLength({ max: 150 }).withMessage("El título es demasiado largo"),

  body("slug")
    .optional()
    .trim()
    .isLength({ min: 3 }).withMessage("El slug es demasiado corto")
    .isLength({ max: 150 }).withMessage("El slug es demasiado largo")
    .matches(/^[a-z0-9-]+$/).withMessage("El slug solo puede contener letras, números y guiones"),

  body("body")
    .optional()
    .trim()
    .isLength({ min: 10 }).withMessage("El contenido es demasiado corto"),

  body("category")
    .optional()
    .trim()
    .isLength({ min: 3 }).withMessage("La categoría es demasiado corta")
    .isLength({ max: 50 }).withMessage("La categoría es demasiado larga"),

  body("published")
    .optional()
    .isBoolean().withMessage("El campo 'published' debe ser booleano")
];

