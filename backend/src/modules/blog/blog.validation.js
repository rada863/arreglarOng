import { z } from "zod";

export const blogCreateSchema = z.object({
  title: z
    .string({
      required_error: "El título es obligatorio",
    })
    .min(3, "El título es demasiado corto")
    .max(120, "El título es demasiado largo")
    .trim(),

  content: z
    .string({
      required_error: "El contenido es obligatorio",
    })
    .min(10, "El contenido es demasiado corto")
    .trim(),

  image: z
    .string()
    .url("La imagen debe ser una URL válida")
    .optional(),

  slug: z
    .string()
    .min(3, "El slug es demasiado corto")
    .max(150, "El slug es demasiado largo")
    .trim()
    .optional(),

  tags: z
    .array(
      z
        .string()
        .min(1, "El tag no puede estar vacío")
        .trim()
    )
    .optional(),

  category: z
    .string()
    .min(3, "La categoría es demasiado corta")
    .max(50, "La categoría es demasiado larga")
    .trim()
    .optional(),

  published: z.boolean().optional(),
});

export const blogUpdateSchema = blogCreateSchema.partial();
