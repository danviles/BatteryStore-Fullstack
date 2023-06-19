const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitando cors
app.use(cors());

// Habilitar express.json
app.use( express.json({ extended: true }));

// Puerto de la app
const PORT = process.env.PORT || 4000;

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use("/api/baterias", require("./routes/baterias"));
app.use("/api/tienda", require("./routes/tienda"));

// Arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando por el puerto ${PORT}`);
})

module.exports = app
