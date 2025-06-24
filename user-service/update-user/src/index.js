const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3003;

app.use(express.json()); // Para procesar solicitudes JSON

// Configuración de la base de datos PostgreSQL
const pool = new Pool({
  user: 'admin',
  host: 'db',
  database: 'wedding_event_management', // Asegúrate de que el nombre sea el correcto
  password: 'admin123',
  port: 5432,
});

// Endpoint para actualizar un usuario (PUT)
app.put('/update-user', async (req, res) => {
  const { user_id, username, email, password } = req.body;

  try {
    const result = await pool.query(
      'UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
      [username, email, password, user_id]
    );

    if (result.rows.length > 0) {
      res.status(200).json({
        message: 'Usuario actualizado exitosamente',
        user: result.rows[0],
      });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar el usuario', details: err });
  }
});

app.listen(port, () => {
  console.log(`Update User service listening at http://localhost:${port}`);
});
