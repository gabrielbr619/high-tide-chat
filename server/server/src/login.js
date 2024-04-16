// const bcrypt = require('bcrypt');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// const users = [
//   {
//     username: 'testuser',
//     password: bcrypt.hashSync('testpassword', 10),
//   },
// ];

// app.post('/login', (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   const user = users.find((u) => u.username === username);

//   if (!user) {
//     return res.status(401).send('Invalid username');
//   }

//   if (!bcrypt.compareSync(password, user.password)) {
//     return res.status(401).send('Invalid password');
//   }

//   res.send('You are now logged in!');
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });
