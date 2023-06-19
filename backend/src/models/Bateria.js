const mongoose = require("mongoose");

const BateriasSchema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
    trim: true,
  },
  estado: {
    type: String,
    required: true,
    trim: true,
  },
  voltaje: {
    type: Number,
    required: true,
    trim: true,
  },
  amperios: {
    type: Number,
    required: true,
    trim: true,
  },
  precio: {
    type: Number,
    required: true,
    trim: true,
  },
  propietario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
  },
  registro: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Bateria", BateriasSchema);
