// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

// Crea un usuario
// api/usuarios
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6 })
    ],
    usuarioController.crearUsuario
);

// Consulta un usuario
// api/usuarios
router.get('/',
    [
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6 })
    ],
    usuarioController.consultarUsuario
);

// Elimina un usuario
// api/usuarios
router.delete('/',
    auth,
    [
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6 })
    ],
    usuarioController.eliminarUsuario
);

module.exports = router;