// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Sirve archivos estáticos desde la carpeta de producción de Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Redirige todas las peticiones a la aplicación de React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Levanta el servidor
app.listen(PORT, () => {
  console.log(`Server running locally in: http://localhost:${PORT}`);
});
