import * as request from "supertest";

describe("alunos test", () => {
  it("##GET /aluno", async () => {
    const response = await request("http://localhost:8080").get("/aluno/");
    expect(response.status).toBe(200);
  });
  it("##POST /aluno", async () => {
    const response = await request("http://localhost:8080").post("/aluno/");
    expect(response.status).toBe(200);
  });
});
