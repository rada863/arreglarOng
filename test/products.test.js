import request from "supertest";
import mongoose from "mongoose";
import app from "../server.js"; // tu servidor Express
import Product from "../modules/products/product.model.js";

describe("CRUD de Productos", () => {
  let productId;

  beforeAll(async () => {
    // Conexión a la base de datos de test
    await mongoose.connect("mongodb://127.0.0.1:27017/test_db_products");
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Product.deleteMany({});
  });

  // -------------------------------
  // GET /products
  // -------------------------------
  test("Debe obtener todos los productos", async () => {
    await Product.create({ name: "Mouse", price: 100, category: "tech" });

    const res = await request(app).get("/products");

    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
    expect(res.body.data.length).toBe(1);
    expect(res.body.data[0].name).toBe("Mouse");
  });

  // -------------------------------
  // POST /products
  // -------------------------------
  test("Debe crear un producto", async () => {
    const res = await request(app)
      .post("/products")
      .send({
        name: "Teclado",
        price: 200,
        category: "tech",
      });

    expect(res.status).toBe(201);
    expect(res.body.ok).toBe(true);
    expect(res.body.data.name).toBe("Teclado");

    productId = res.body.data._id;
  });

  // -------------------------------
  // GET /products/:id
  // -------------------------------
  test("Debe obtener un producto por ID", async () => {
    const product = await Product.create({
      name: "Monitor",
      price: 500,
      category: "tech",
    });

    const res = await request(app).get(`/products/${product._id}`);

    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
    expect(res.body.data.name).toBe("Monitor");
  });

  // -------------------------------
  // PUT /products/:id
  // -------------------------------
  test("Debe actualizar un producto", async () => {
    const product = await Product.create({
      name: "Notebook",
      price: 1500,
      category: "tech",
    });

    const res = await request(app)
      .put(`/products/${product._id}`)
      .send({ price: 1800 });

    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
    expect(res.body.data.price).toBe(1800);
  });

  // -------------------------------
  // DELETE /products/:id
  // -------------------------------
  test("Debe eliminar un producto", async () => {
    const product = await Product.create({
      name: "Tablet",
      price: 800,
      category: "tech",
    });

    const res = await request(app).delete(`/products/${product._id}`);

    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
    expect(res.body.message).toBe("Producto eliminado correctamente");

    const exists = await Product.findById(product._id);
    expect(exists).toBeNull();
  });

  // -------------------------------
  // Error: producto no existe
  // -------------------------------
  test("Debe devolver error si el producto no existe", async () => {
    const fakeId = new mongoose.Types.ObjectId();

    const res = await request(app).get(`/products/${fakeId}`);

    expect(res.status).toBe(404);
  });
});
