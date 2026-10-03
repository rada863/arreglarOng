import * as blogService from "./blog.service.js";
import { sanitize } from "../../utils/sanitize.js"; // si ya lo tenés
import { blogCreateSchema, blogUpdateSchema } from "./blog.validation.js";

export const getPosts = async (req, res, next) => {
  try {
    const posts = await blogService.getPosts();
    res.json({ ok: true, data: posts });
  } catch (err) {
    next(err);
  }
};

export const getPostById = async (req, res, next) => {
  try {
    const id = sanitize(req.params.id);
    const post = await blogService.getPostById(id);
    res.json({ ok: true, data: post });
  } catch (err) {
    next(err);
  }
};

export const createPost = async (req, res, next) => {
  try {
    // Validación Zod
    const parsed = blogCreateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        ok: false,
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    // Sanitización
    const data = sanitize(parsed.data);

    const post = await blogService.createPost(data);
    res.status(201).json({ ok: true, data: post });
  } catch (err) {
    next(err);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const id = sanitize(req.params.id);

    // Validación parcial para updates
    const parsed = blogUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        ok: false,
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const data = sanitize(parsed.data);

    const post = await blogService.updatePost(id, data);
    res.json({ ok: true, data: post });
  } catch (err) {
    next(err);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const id = sanitize(req.params.id);
    await blogService.deletePost(id);

    res.json({ ok: true, message: "Post eliminado correctamente" });
  } catch (err) {
    next(err);
  }
};
