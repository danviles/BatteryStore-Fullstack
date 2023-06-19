const Bateria = require("../models/Bateria");
const Usuario = require("../models/Usuario");
const { validationResult } = require("express-validator");

exports.crearBateria = async (req, res) => {
  // revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    // crea la bateria nueva
    bateria = new Bateria(req.body);
    // Guardar el propietario via JWT
    bateria.propietario = req.usuario.id;

    // guardar bateria
    await bateria.save();
    res.json(bateria);
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.consultarBaterias = async (req, res) => {
  try {
    // sabemos el usuario auth
    const baterias = await Bateria.find({ propietario: req.usuario.id }).sort({
      registro: -1,
    });
    res.json({ baterias });
  } catch (error) {
    console.log(error);
    res.status(500).send("Algo salio mal en obtener baterias");
  }
};

// Actualiza una bateria
exports.editarBaterias = async (req, res) => {
  // Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // extraer la información de la bateria
  const { marca, estado, voltaje, amperios, precio, img } = req.body;
  const nuevaBateria = {};

  if (marca && estado && voltaje && amperios && precio && img) {
    nuevaBateria.propietario = req.usuario.id;
    nuevaBateria.marca = marca;
    nuevaBateria.estado = estado;
    nuevaBateria.voltaje = voltaje;
    nuevaBateria.amperios = amperios;
    nuevaBateria.precio = precio;
    nuevaBateria.img = img;
  }

  try {
    // revisar el ID
    let bateria = await Bateria.findById(req.params.id);

    if (!bateria) {
      return res.status(404).json({ msg: "Bateria no encontrada" });
    }

    // verificar el creador de la bateria
    if (bateria.propietario.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No Autorizado" });
    }

    // actualizar
    bateria = await Bateria.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevaBateria },
      { new: true }
    );

    res.json({ bateria });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};

exports.eliminarBateria = async (req, res) => {
  try {
    let bateria = await Bateria.findById(req.params.id);

    if (!bateria) {
      return res.status(404).json({ msg: "No existe esa bateria" });
    }

    const propietario = await Usuario.findById(req.usuario.id);

    if (!propietario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    // revisar si la bateria actual pertenece al usuario identificado

    if (bateria.propietario.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }

    // Eliminar

    await Bateria.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Bateria eliminada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Algo salio mal en eliminar bateria");
  }
};
