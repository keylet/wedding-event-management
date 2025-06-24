const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3004;

app.use(express.json()); // Para procesar solicitudes JSON

// Configuración de la base de datos PostgreSQL
const pool = new Pool({
  user: 'admin',
  host: 'db',
  database: 'wedding_event_management',
  password: 'admin123',
  port: 5432,
});

// Endpoint para el inicio de sesión (POST)
app.post('/login-logout/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1 AND password = $2',
      [email, password]
    );

    if (result.rows.length > 0) {
      res.status(200).json({
        message: 'Inicio de sesión exitoso',
        user: result.rows[0], // Devolver los detalles del usuario
      });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al iniciar sesión', details: err });
  }
});

// Endpoint para el cierre de sesión (POST)
app.post('/login-logout/logout', (req, res) => {
  const { email } = req.body;

  // Lógica para cerrar sesión (por ejemplo, eliminar un token JWT si fuera el caso)
  res.status(200).json({ message: `Usuario ${email} cerrado sesión correctamente` });
});

app.listen(port, () => {
  console.log(`Login/Logout service listening at http://localhost:${port}`);
});
