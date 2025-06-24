const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3005;

app.use(express.json()); // Para procesar solicitudes JSON

// Configuración de la base de datos PostgreSQL
const pool = new Pool({
  user: 'admin',
  host: 'db',
  database: 'wedding_event_management', 
  password: 'admin123',
  port: 5432,
});

app.get('/user-profile/:user_id', async (req, res) => {
  const { user_id } = req.params; // Obtener el user_id desde los parámetros de la URL

  try {
    const result = await pool.query('SELECT * FROM user_profiles WHERE user_id = $1', [user_id]);
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]); // Devuelve el perfil del usuario
    } else {
      res.status(404).json({ message: 'Perfil de usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el perfil', details: err });
  }
});


app.listen(port, () => {
  console.log(`User Profile service listening at http://localhost:${port}`);
});
