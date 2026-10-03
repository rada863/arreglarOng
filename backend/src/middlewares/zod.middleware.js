/**
 * Middleware de validación con Zod
 * Nombre correcto: validateZod
 * Compatible con tus rutas actuales
 */
export const validateZod = (schema) => {
  return (req, res, next) => {
    const parsed = schema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        ok: false,
        errors: parsed.error.flatten().fieldErrors
      });
    }

    req.body = parsed.data; // datos validados y limpios
    next();
  };
};
