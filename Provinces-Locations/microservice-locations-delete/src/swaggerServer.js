// src/swaggerServer.js

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');

// Upload Swagger YAML file
const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yml', 'utf8'));

const app = express();

// Configuration Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`📄 Swagger UI available at http://localhost:${PORT}/api-docs`);
});