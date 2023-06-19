const express = require("express");
const router = express.Router();
const tiendaController = require("../controllers/tiendaController");
const auth = require('../middleware/auth');

// Consulta las baterias de todos los usuarios
// api/tienda
router.get("/",
    tiendaController.consultarBaterias
);

// Consulta la bateria seleccionada
// api/tienda
router.get("/item/:id",
    tiendaController.verBateria
);

// Elimina una bateria que fue comprada
// api/tienda
router.delete("/comprar/:id",
    auth,
    tiendaController.eliminarBateriaComprada
);

module.exports = router;
