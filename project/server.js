// Importa los módulos de ES
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

// Obtiene la ruta del directorio actual (ya que __dirname no está disponible en ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sirve archivos estáticos desde la carpeta de producción de Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta de health check
app.get('/healthcheck', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running smoothly' });
});

// Redirige todas las peticiones a la aplicación de React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Levanta el servidor
app.listen(PORT, () => {
  console.log(`Server running locally in: http://localhost:${PORT}`);
});
