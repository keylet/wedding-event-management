require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT || 3004;

const cors = require('cors');
app.use(cors()); 

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  
});
