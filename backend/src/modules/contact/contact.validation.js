import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({
      required_error: "El nombre es obligatorio",
    })
    .trim()
    .min(2, "El nombre es demasiado corto")
    .max(80, "El nombre es demasiado largo"),

  email: z
    .string({
      required_error: "El email es obligatorio",
    })
    .trim()
    .toLowerCase()
    .email("Email inválido")
    .max(120, "El email es demasiado largo"),

  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\s-]{6,20}$/, "Teléfono inválido")
    .optional(),

  message: z
    .string({
      required_error: "El mensaje es obligatorio",
    })
    .trim()
    .min(10, "El mensaje es demasiado corto")
    .max(1000, "El mensaje es demasiado largo"),
});
