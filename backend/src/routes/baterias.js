// Rutas para crear usuarios
const express = require("express");
const router = express.Router();
const bateriaController = require("../controllers/bateriaController");
const { check } = require("express-validator");
const auth = require('../middleware/auth');


// Crea una bateria
// api/baterias
router.post("/",
  auth,
  [
    check("marca", "La marca es obligatorio").not().isEmpty(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    check("voltaje", "El voltaje es obligatorio").not().isEmpty(),
    check("amperios", "Los amperios es obligatorio").not().isEmpty(),
    check("precio", "El precio es obligatorio").not().isEmpty(),
    check("precio", "El precio debe ser un numero").isNumeric(),
    check("voltaje", "El voltaje debe ser un numero").isNumeric(),
    check("amperios", "Los amperios deben ser un numero").isNumeric()
  ],
  bateriaController.crearBateria
);

// Consulta las baterias del usuario
// api/baterias
router.get("/",
  auth,
  bateriaController.consultarBaterias
);

// Actualizar bateria
router.put('/:id', 
    auth,
    [
      check("marca", "La marca es obligatorio").not().isEmpty(),
      check("estado", "El estado es obligatorio").not().isEmpty(),
      check("voltaje", "El voltaje es obligatorio").not().isEmpty(),
      check("amperios", "Los amperios es obligatorio").not().isEmpty(),
      check("precio", "El precio es obligatorio").not().isEmpty(),
      check("precio", "El precio debe ser un numero").isNumeric(),
      check("voltaje", "El voltaje debe ser un numero").isNumeric(),
      check("amperios", "Los amperios deben ser un numero").isNumeric()
    ],
    bateriaController.editarBaterias
);

// Elimina una bateria
// api/baterias
router.delete("/:id",
  auth,
  bateriaController.eliminarBateria
);

module.exports = router;
