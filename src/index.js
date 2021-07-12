import express from 'express';

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} : ${req.url}`);
  next();
}

const handleHome = (req, res) => {
  return res.send('I still love you.') 
}

app.get('/', logger, handleHome)

const handleListening = () => 
  console.log(`✅ Server Listening on port https://localhost:${PORT} 🚀`)


app.listen(PORT, handleListening)