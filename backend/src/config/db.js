const mongoose = require('mongoose');
require('dotenv').config({ path: 'src/variables.env' });

const {NODE_ENV} = process.env

const connection = NODE_ENV === 'test'
? process.env.DB_MONGO_TEST
: process.env.DB_MONGO

const conectarDB = async () => {
    try {
        await mongoose.connect(connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true
          });
          console.log('DB Conectada');
    } catch (error) {
        console.log('hubo un error')
        console.log(error);
        process.exit(1); // Detener la app
    }
}

module.exports = conectarDB;