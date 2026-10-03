import Content from "../../database/models/Content.js";

export const contentService = {
  async getAll(query = {}) {
    const { category, published } = query;

    const filter = {};

    if (category) filter.category = category.toLowerCase();
    if (published !== undefined) filter.published = published === "true";

    return await Content.find(filter).sort({ createdAt: -1 }).lean();
  },

  async getById(id) {
    return await Content.findById(id).lean();
  },

  async create(data) {
    // Si no viene slug, se genera automáticamente desde el modelo
    const content = new Content(data);
    return await content.save();
  },

  async update(id, data) {
    const item = await Content.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    }).lean();

    if (!item) {
      const error = new Error("Contenido no encontrado");
      error.status = 404;
      throw error;
    }

    return item;
  },

  async remove(id) {
    const item = await Content.findByIdAndDelete(id).lean();

    if (!item) {
      const error = new Error("Contenido no encontrado");
      error.status = 404;
      throw error;
    }

    return item;
  }
};
