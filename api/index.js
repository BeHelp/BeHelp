// 'use strict';

const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// const rateLimit = require('express-rate-limit');
require('dotenv').config();

const config = require('./config');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const routes = require('./routes/index');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
  morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a',
    }),
  }),
);

// app.use(
//   rateLimit({
//     windowMs: 1 * 60 * 60 * 1000, // 12 hour duration in milliseconds
//     max: 20,
//     message: `You exceeded 20 requests in 1 hour limit!`,
//     headers: true,
//   }),
// );

if (config.MODE === 'development') {
  app.use(morgan('dev'));
}

// register
app.use('/api/register', registerRoute);

// login
app.use('/api/login', loginRoute);

const authCheck = require('./middleware/auth-check');
app.use('/api', authCheck);

app.use('/api', routes);

app.use(
  '/',
  express.static(path.join(__dirname, '..', config.STATIC_DIR || 'client')),
);

/* eslint-disable */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).end();
});

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(
      `listening at http://localhost:${config.PORT} (${config.MODE} mode)`,
    );
  }
});
