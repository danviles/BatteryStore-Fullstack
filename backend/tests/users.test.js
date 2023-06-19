const request = require("supertest");
const app = require("../src/index");

describe("Tests para las rutas de los usuarios", () => {
  let token;
  it("Registrar usuario (Singup)", (done) => {
    const data = {
      nombre: "Name",
      apellido: "Last Name",
      email: "test@ull.edu.es",
      password: "123456",
    };
    request(app)
      .post("/api/usuarios")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect((res) => {
        token = res.body.token;
      })
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("Autenticar un usuario Usuario (SingIn)", (done) => {
    const data = {
      nombre: "Name",
      apellido: "Last Name",
      email: "test@ull.edu.es",
      password: "123456",
    };
    request(app)
      .post("/api/auth")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("Obtener el usuario autenticado (Token)", (done) => {
    const data = {
      nombre: "Name",
      apellido: "Last Name",
      email: "test@ull.edu.es",
      password: "123456",
    };
    request(app)
      .post("/api/auth")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("Consutar un usuario", (done) => {
    const data = {
      email: "test@ull.edu.es",
      password: "123456",
    };
    request(app)
      .get("/api/usuarios")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("Eliminar un usuario (Delete)", (done) => {
    const data = {
      email: "test@ull.edu.es",
      password: "123456",
    };
    request(app)
      .delete("/api/usuarios")
      .send(data)
      .set("Accept", "application/json")
      .set("x-auth-token", token)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
