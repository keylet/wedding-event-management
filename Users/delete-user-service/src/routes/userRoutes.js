const express = require('express');
const { deleteUser } = require('../controllers/userController');

const router = express.Router();

// Path to delete users
router.delete('/users/:id', deleteUser);

module.exports = router;
