import { z } from "zod";

export const createOrderSchema = z.object({
  items: z
    .array(
      z.object({
        productId: z
          .string({
            required_error: "El producto es obligatorio",
          })
          .trim(),

        quantity: z
          .number({
            required_error: "La cantidad es obligatoria",
          })
          .int()
          .min(1, "La cantidad debe ser al menos 1"),

        price: z
          .number({
            required_error: "El precio es obligatorio",
          })
          .min(0, "El precio debe ser válido"),
      })
    )
    .min(1, "Debe incluir al menos un producto"),

  total: z
    .number({
      required_error: "El total es obligatorio",
    })
    .min(1, "El total debe ser mayor a 0"),

  paymentMethod: z
    .enum(["cuenta_dni", "transferencia"], {
      required_error: "Método de pago inválido",
    }),

  shippingAddress: z
    .string({
      required_error: "La dirección es obligatoria",
    })
    .trim()
    .min(5, "La dirección es demasiado corta")
    .max(300, "La dirección es demasiado larga"),

  notes: z
    .string()
    .trim()
    .max(500, "Las notas no pueden superar los 500 caracteres")
    .optional(),
});

