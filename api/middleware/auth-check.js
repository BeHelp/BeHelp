const jwt = require('jsonwebtoken');

require('dotenv').config({ path: '../.env' });

const tokenSecret = process.env.TOKENSECRET;

const authCheck = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // console.log(`tokenSecret2: ${tokenSecret}`);

  // console.log(req.headers, authHeader);
  if (authHeader === undefined) {
    res.status(400).send({ message: 'no auth header' });
    return;
  }
  const authToken = authHeader.split(' ')[1];
  // console.log(authToken, tokenSecret);
  const tokenVerification = jwt.verify(
    authToken,
    tokenSecret,
    (err, decoded) => {
      if (err) {
        console.log(err);
        throw err;
      }
      // console.log(`JWT DECODED: ${JSON.stringify(decoded)}`);
      return decoded;
    },
  );
  if (authToken === undefined || !tokenVerification) {
    // console.log('tokenVerification', tokenVerification);
    console.log('please provide valid token');
    res.status(400).send({ message: 'invalid user token' });
  } else {
    console.log('you are logged in');
    next();
  }
};

module.exports = authCheck;
