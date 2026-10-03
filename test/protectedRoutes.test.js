import request from "supertest";
import app from "../server/app.js";

let token;

beforeAll(async () => {
  const res = await request(app)
    .post("/admin/auth/login")
    .send({ email: "admin@admin.com", password: "123456" });

  token = res.body.data.token;
});

describe("Rutas protegidas", () => {
  it("debe permitir acceso con token válido", async () => {
    const res = await request(app)
      .get("/admin/users")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

  it("debe bloquear acceso sin token", async () => {
    const res = await request(app).get("/admin/users");
    expect(res.statusCode).toBe(401);
  });
});
