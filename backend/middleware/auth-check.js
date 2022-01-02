const jwt = require('jsonwebtoken');

require('dotenv').config({ path: './.env' });

const tokenSecret = process.env.ACCESS_TOKENSECRET;

const catchError = (err, res) => {
  if (err instanceof jwt.TokenExpiredError) {
    return res
      .status(401)
      .send({ message: 'Unauthorized! Access Token was expired!' });
  }

  return res.sendStatus(401).send({ message: 'Unauthorized!' });
};

const authCheck = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader === undefined) {
    res.status(400).send({ message: 'no auth header' });
    return;
  }
  const authToken = authHeader.split(' ')[1];
  const tokenVerification = jwt.verify(
    authToken,
    tokenSecret,
    (err, decoded) => {
      if (err) {
        return catchError(err, res);
      }
      next();
    }
  );
};

module.exports = authCheck;
