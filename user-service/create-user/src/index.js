const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3001;

app.use(express.json()); // Esto permite recibir datos JSON en el cuerpo de la solicitud

// Configuración de la base de datos PostgreSQL
const pool = new Pool({
  user: 'admin',
  host: 'db',
  database: 'wedding_event_management',
  password: 'admin123',
  port: 5432,
});

// Agregar un manejador para GET en la raíz
app.get('/', (req, res) => {
  res.send('Create User Service is running. Use POST /create-user to create users.');
});

// Endpoint para crear un nuevo usuario (requiere una solicitud POST)
app.post('/create-user', async (req, res) => {
  const { username, email, password } = req.body; // Recibe los datos desde el cuerpo de la solicitud

  try {
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, password]
    );
    res.status(201).json(result.rows[0]); // Devuelve el usuario creado
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el usuario', details: err });
  }
});

app.listen(port, () => {
  console.log(`Create User service listening at http://localhost:${port}`);
});
