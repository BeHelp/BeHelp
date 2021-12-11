const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/login', require('./routes/login.js'));
app.use('/register', require('./routes/register.js'));
app.use('/users', require('./routes/users.js'));
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

//listen
app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});
