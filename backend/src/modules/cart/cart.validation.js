import { z } from "zod";

/* -----------------------------------------
   AGREGAR AL CARRITO
----------------------------------------- */
export const addToCartSchema = z.object({
  productId: z
    .string()
    .trim()
    .min(1, "El ID del producto es obligatorio")
    .regex(/^[a-fA-F0-9]{24}$/, "ID de producto inválido"),

  quantity: z
    .number({
      invalid_type_error: "La cantidad debe ser un número"
    })
    .int("La cantidad debe ser un número entero")
    .positive("La cantidad debe ser mayor a 0")
    .max(50, "La cantidad máxima permitida es 50")
    .default(1)
});

/* -----------------------------------------
   REMOVER DEL CARRITO
----------------------------------------- */
export const removeFromCartSchema = z.object({
  productId: z
    .string()
    .trim()
    .min(1, "El ID del producto es obligatorio")
    .regex(/^[a-fA-F0-9]{24}$/, "ID de producto inválido")
});

/* -----------------------------------------
   LIMPIAR CARRITO (opcional)
----------------------------------------- */
export const clearCartSchema = z.object({
  confirm: z
    .boolean()
    .optional()
});
