import express from 'express';
import morgan from 'morgan';

const PORT = 4000;

const app = express();
const logger = morgan('dev');

const home = (req, res) => {
  console.log('I will respond.');
  return res.send('I love ya.');
};

const login = (req, res) => {
  return res.send('login');
};

app.use(logger);
app.get('/', home);
app.get('/login', login);

const handleListening = () =>
  console.log(`✅ Server Listening on port https://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
