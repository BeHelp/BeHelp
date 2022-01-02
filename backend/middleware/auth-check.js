require('dotenv').config({ path: './.env' });

const jwt = require('jsonwebtoken');
const { TokenExpiredError } = jwt;

const tokenSecret = process.env.TOKENSECRET;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res
      .status(401)
      .send({ message: 'Unauthorized! Access Token expired!' });
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
      return decoded;
    }
  );
  if (authToken === undefined || !tokenVerification) {
    console.log('please provide valid token');
    res.status(400).send({ message: 'invalid user token' });
  } else {
    console.log('you are logged in');
    next();
  }
};

module.exports = authCheck;
