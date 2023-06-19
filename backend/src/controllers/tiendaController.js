const Bateria = require("../models/Bateria");

exports.consultarBaterias = async (req, res) => {
  try {
    const baterias = await Bateria.find().sort({ registro: -1 });
    res.json({ baterias });
  } catch (error) {
    console.log(error);
    res.status(500).send("Algo salio mal en obtener baterias de tienda");
  }
};

exports.verBateria = async (req, res) => {
  try {
    let bateria = await Bateria.findById(req.params.id);

    if (!bateria) {
      return res.status(404).json({ msg: "No existe esa bateria" });
    }

    // Devuelve bateria
    res.json({bateria});
  } catch (error) {
    console.log(error);
    res.status(500).send("Algo salio mal en eliminar bateria");
  }
};

exports.eliminarBateriaComprada = async (req, res) => {
  try {
    let bateria = await Bateria.findById(req.params.id);

    if (!bateria) {
      return res.status(404).json({ msg: "No existe esa bateria" });
    }

    // Eliminar

    await Bateria.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Bateria comprada (eliminada)" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Algo salio mal en eliminar bateria");
  }
};
