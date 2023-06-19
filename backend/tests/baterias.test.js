const request = require("supertest");
const app = require("../src/index");

describe("Tests para las rutas de las baterias", () => {
  let token;
  let idBateria;
  it("Registrar usuario para crearle baterias", (done) => {
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
  it("Crear una bateria al usuario 'Test'", (done) => {
    const bateria = {
      marca: "bosch",
      estado: "Bueno",
      voltaje: 12,
      amperios: 60,
      precio: 65,
      img: "https://drive.google.com/uc?export=view&id=1oYhkawjImeGKWIsBfPhEY9z3VyvA0kcN",
    };
    request(app)
      .post("/api/baterias")
      .send(bateria)
      .set("Accept", "application/json")
      .set("x-auth-token", token)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("Muestra la bateria del usuario 'Test'", (done) => {
    request(app)
      .get("/api/baterias")
      .set("Accept", "application/json")
      .set("x-auth-token", token)
      .expect("Content-Type", /json/)
      .expect((res) => {
        idBateria = res.body.baterias[0]._id;
      })
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("Modifica la bateria del usuario 'Test'", (done) => {
    const bateria = {
      marca: "varta",
      estado: "Malo",
      voltaje: 12,
      amperios: 60,
      precio: 45,
      img: "https://drive.google.com/uc?export=view&id=16awhe9WVfkqKAiFmOadhh2j1sgcysCif",
    };
    request(app)
      .put(`/api/baterias/${idBateria}`)
      .send(bateria)
      .set("Accept", "application/json")
      .set("x-auth-token", token)
      .expect("Content-Type", /json/)
      .expect((res) => {
        idBateria = res.body.bateria._id;
      })
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("Eliminar la bateria del usuario 'Test'", (done) => {
    request(app)
      .delete(`/api/baterias/${idBateria}`)
      .set("Accept", "application/json")
      .set("x-auth-token", token)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("Eliminar el usuario 'Test'", (done) => {
    const data = {
      email: "test@ull.edu.es",
      password: "123456",
    };
    request(app)
      .delete("/api/usuarios")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .set("x-auth-token", token)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
