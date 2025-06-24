const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3002;

// PostgreSQL connection pool
const pool = new Pool({
  user: 'admin',
  host: 'db',
  database: 'wedding_event_management',
  password: 'admin123',
  port: 5432,
});

app.delete('/delete-user', async (req, res) => {
  await pool.query('DELETE FROM users WHERE id = $1', [1]);
  res.send('User deleted successfully');
});

app.listen(port, () => {
  console.log(`Delete User service listening at http://localhost:${port}`);
});