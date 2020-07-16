import request from "supertest";
import app from "../server";

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
  test("It should response Hello world message", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe('{"message":"Hello world"}');
  });
});
