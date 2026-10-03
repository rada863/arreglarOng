import { z } from "zod";

export const productCreateSchema = z.object({
  name: z.string().min(3, "El nombre es demasiado corto"),

  slug: z.string().min(3, "El slug es demasiado corto").optional(),

  description: z.string().min(5, "La descripción es demasiado corta"),

  price: z.number().positive("El precio debe ser mayor a 0"),

  stock: z.number().int().nonnegative("El stock no puede ser negativo").optional(),

  category: z.string().min(3, "La categoría es demasiado corta"),

  images: z.array(z.string().url()).optional(),

  active: z.boolean().optional()
});

export const productUpdateSchema = productCreateSchema.partial();
