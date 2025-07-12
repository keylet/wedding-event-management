const express = require('express');
const { getAllUsers, getUserById } = require('../controllers/userController');

const router = express.Router();


router.get('/users', getAllUsers); // Get all users
router.get('/users/:id', getUserById); // Get a user by ID

module.exports = router;
