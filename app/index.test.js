import { server } from ".";
import supertest from "supertest";

const request = supertest(server);

describe("GET /", () => {
  it("Should return 'Hello World!' by default", async () => {
    const res = await request.get("/");
    expect(res.status).toEqual(200);
    expect(res.text).toEqual("Hello World!");
  });

  it("Should return 'Hello, [name]!' when name param present", async () => {
    const res = await request.get("/?name=John");
    expect(res.status).toEqual(200);
    expect(res.text).toEqual("Hello, John!");
  });
});

afterAll(() => {
  server.close();
});