import { Blog } from "./blog.model.js";
import { sanitize } from "../../utils/sanitize.js";

/**
 * Obtener todos los posts (ordenados por fecha)
 */
export const getPosts = async () => {
  const posts = await Blog.find()
    .sort({ createdAt: -1 })
    .lean();

  return posts;
};

/**
 * Obtener un post por ID
 */
export const getPostById = async (id) => {
  const cleanId = sanitize(id);

  const post = await Blog.findById(cleanId).lean();
  if (!post) {
    const error = new Error("Post no encontrado");
    error.status = 404;
    throw error;
  }

  return post;
};

/**
 * Crear un nuevo post
 */
export const createPost = async (data) => {
  const cleanData = sanitize(data);

  const post = await Blog.create(cleanData);
  return post.toJSON(); // consistente con otros módulos
};

/**
 * Actualizar un post por ID
 */
export const updatePost = async (id, data) => {
  const cleanId = sanitize(id);
  const cleanData = sanitize(data);

  const post = await Blog.findByIdAndUpdate(cleanId, cleanData, {
    new: true,
    runValidators: true,
  }).lean();

  if (!post) {
    const error = new Error("Post no encontrado");
    error.status = 404;
    throw error;
  }

  return post;
};

/**
 * Eliminar un post por ID
 */
export const deletePost = async (id) => {
  const cleanId = sanitize(id);

  const post = await Blog.findByIdAndDelete(cleanId).lean();
  if (!post) {
    const error = new Error("Post no encontrado");
    error.status = 404;
    throw error;
  }

  return true;
};
