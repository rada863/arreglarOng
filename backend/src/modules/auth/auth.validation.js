import { z } from "zod";

export const registerSchema = z.object({
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

  password: z
    .string({
      required_error: "La contraseña es obligatoria",
    })
    .trim()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "Debe contener al menos una mayúscula")
    .regex(/[a-z]/, "Debe contener al menos una minúscula")
    .regex(/[0-9]/, "Debe contener al menos un número"),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "El email es obligatorio",
    })
    .trim()
    .toLowerCase()
    .email("Email inválido"),

  password: z
    .string({
      required_error: "La contraseña es obligatoria",
    })
    .trim()
    .min(1, "La contraseña es requerida"),
});
