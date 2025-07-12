const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Configuración de CORS
const corsOptions = {
  origin: ['http://localhost:3000'],  // Asegúrate de que el origen sea correcto
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// Usar el middleware de CORS con las opciones configuradas
app.use(cors(corsOptions));

// Middleware para procesar el cuerpo de las solicitudes
app.use(bodyParser.json());

// Rutas
app.use('/api', userRoutes);

// Exportar la aplicación
module.exports = app;

