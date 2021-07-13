import express from 'express';

const PORT = 4000;

const app = express();

const routeLogger = (req, res, next) => {
  console.log(`ROUTE: ${req.path}`);
  next();
};

const methodLogger = (req, res, next) => {
  console.log(`METHOD: ${req.method}`);
  next();
};

const handleHome = (req, res) => {
  return res.send('I still love you.');
};

app.get('/', methodLogger, routeLogger, handleHome);

const handleListening = () =>
  console.log(`✅ Server Listening on port https://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
