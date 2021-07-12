import express from 'express';

const PORT = 4000;

const app = express();

const handleHome = (req,res) =>{return res.send('I still love you🚗🚓🚕🛺🚙🚌🚐🚎🚑🚒🚚🚛🚜🚘🚔🚖')}
const handleLogin = (req, res) => res.send('Login!')


app.get('/', handleHome)
app.get('/login', handleLogin)

const handleListening = () => 
  console.log(`Server Listening on port https://localhost:${PORT}🚀`)


app.listen(PORT, handleListening)