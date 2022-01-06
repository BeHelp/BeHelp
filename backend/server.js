const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const { refreshToken } = require('./middleware/auth');

//middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/email', require('./routes/email.js'));
app.use('/login', require('./routes/login.js'));
app.use('/register', require('./routes/register.js'));
app.use('/refreshtoken', refreshToken);
app.use('/users', require('./routes/users.js'));
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

//listen
app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running on port 5000');
});
