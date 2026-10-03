import { Router } from "express";
import * as controller from "./blog.controller.js";
import { blogCreateSchema, blogUpdateSchema } from "./blog.validation.js";
import { validateZod } from "../../middlewares/zod.middleware.js";
import { sanitize } from "../../utils/sanitize.js";
import rateLimit from "express-rate-limit";

const router = Router();

/**
 * Anti-spam para creación de posts
 */
const createPostLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 10, // máximo 10 intentos
  message: {
    ok: false,
    message: "Demasiadas solicitudes, intenta nuevamente en un minuto.",
  },
});

/**
 * Sanitización de params
 */
router.param("id", (req, _, next, value) => {
  req.params.id = sanitize(value);
  next();
});

/**
 * Rutas públicas
 */
router.get("/", controller.getPosts);
router.get("/:id", controller.getPostById);

/**
 * Rutas protegidas (si mañana querés auth, ya está listo)
 * POST / PUT / DELETE
 */
router.post(
  "/",
  createPostLimiter,
  validateZod(blogCreateSchema),
  controller.createPost
);

router.put(
  "/:id",
  validateZod(blogUpdateSchema),
  controller.updatePost
);

router.delete("/:id", controller.deletePost);

export default router;
