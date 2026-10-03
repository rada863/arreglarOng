import Product from "./product.model.js";

/**
 * Obtener todos los productos
 */
export const getProducts = async () => {
  return await Product.find().lean();
};

/**
 * Obtener un producto por ID
 */
export const getProductById = async (id) => {
  const product = await Product.findById(id).lean();
  return product; // el controller decide si es 404
};

/**
 * Crear un nuevo producto
 */
export const createProduct = async (data) => {
  const product = await Product.create(data);
  return product;
};

/**
 * Actualizar un producto por ID
 */
export const updateProduct = async (id, data) => {
  const product = await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  }).lean();

  return product; // si es null, el controller manda 404
};

/**
 * Eliminar un producto por ID
 */
export const deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  return product; // si es null, el controller manda 404
};
