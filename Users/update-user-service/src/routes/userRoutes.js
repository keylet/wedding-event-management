const express = require('express');
const { updateUser } = require('../controllers/userController');

const router = express.Router();

// route for update users
router.put('/users/:id', updateUser);

module.exports = router;
