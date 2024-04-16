const express = require('express');
const path = require('path');
const { createServer } = require('http');
const { join } = require('path');
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt');

const app = express();
const server = createServer(app);
app.use(cors())
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    credentials: true
  }
});

app.use(express.json());

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('funcionaPorra', () => console.log('FUNCIONOUPORRA'))

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

app.post('/login', async (req, res) => {
  console.log(req.body,"entrou aq krl")
  if (!req.body.username || !req.body.password) {
    res.status(401);
  }
  const client = await pool.connect();
  const result = await client.query(`select * from users where username = '${req.body.username}'`);
  client.release();


  if (result.rows.length === 0)
    return res.status(401).send("invalid username or password")

  const is_password_correct = await bcrypt.compare(req.body.password, result.rows[0].password)
  if (!is_password_correct)
    return res.status(401).send("invalid username or password")

  const { password, ...userFormmated} = result.rows[0]

  const token = jwt.sign(req.body.password, "i need a stronger token");
  return res.status(200).send({ token, user: userFormmated })


})

app.post('/register', async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(401);
  }

  const client = await pool.connect();

  const there_is_already_a_user = await client.query(`select * from users where username = '${req.body.username}'`);

  if (there_is_already_a_user.rows.length > 0) {
    client.release();
    return res.status(401).send("user already exists")
  }

  const saltRounds = 10
  const password_hash = await bcrypt.hash(req.body.password, saltRounds)

  await client.query(`
      INSERT INTO users  (username , "password", nickname)
      VALUES ('${req.body.username}', '${password_hash}', '${req.body.username}')
   `);
  client.release();

  return res.status(200).send("ok")
})

app.put('/change_nickname', async (req, res) => {
  if (!req.body.user || !req.body.new_nickname) {
    res.status(401);
  }
  const client = await pool.connect();


  const there_is_already_a_user =  await client.query(`
  select * 
  from users 
  where nickname = '${req.body.new_nickname}'`)

  if (there_is_already_a_user.rows.length > 0) {
    console.log(there_is_already_a_user.rows[0].nickname, req.body.new_nickname)
    client.release();
    return res.status(401).send("nickname already in use")
  }
  
  await client.query(`
  UPDATE public.users
  set nickname = '${req.body.new_nickname}'
  where id = '${req.body.user.id}'
   `);
  
  const user_response = req.body.user

  user_response.nickname = req.body.new_nickname

  client.release();
  return res.status(200).send(user_response)

})

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
