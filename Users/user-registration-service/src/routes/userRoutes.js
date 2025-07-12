const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para registrar un usuario
router.post('/register', userController.registerUser);  // Debe manejar el POST

// Otras rutas para usuarios
// router.get('/users', userController.getUsers);

module.exports = router;
