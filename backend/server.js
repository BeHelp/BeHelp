const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const { refreshToken } = require('./middleware/auth');

//middleware
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      "default-src": ["'self'"],
      "script-src": ["'self'", "cdn.jsdelivr.net", "unpkg.com", "'unsafe-inline'", "'unsafe-eval'"],
      "style-src": ["'self'", "cdn.jsdelivr.net", "fonts.googleapis.com", "'unsafe-inline'", "'unsafe-eval'"],
      "img-src": ["'self'", "data:", "'unsafe-inline'", "'unsafe-eval'"],
      "font-src":  ["'self'", "fonts.gstatic.com", "'unsafe-inline'", "'unsafe-eval'"]
    },
  }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('dist'))
app.get('/', (req, res) => {
  res.sendFile(path.join('dist/index.html'));
});

//routes
app.use('/email', require('./routes/email'));
app.use('/forgot', require('./routes/forgot'));
app.use('/login', require('./routes/login'));
app.use('/register', require('./routes/register'));
app.use('/refreshtoken', refreshToken);
app.use('/users', require('./routes/users'));
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

//listen
app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running on port 5000');
});
