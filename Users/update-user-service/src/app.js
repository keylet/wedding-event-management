const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Agregar esta línea
const userRoutes = require('./routes/userRoutes');

const app = express();

// Configuration CORS
const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};


// CORS Middleware
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

module.exports = app;