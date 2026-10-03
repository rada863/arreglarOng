import request from "supertest";
import app from "../server/app.js"; // tu archivo principal de express

describe("Servidor", () => {
  it("debe responder en /api/health", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});
