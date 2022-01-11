const jwt = require('jsonwebtoken');

require('dotenv').config({ path: './.env' });

const { RefreshToken } = require('../data-access/db.js');

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

const refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;
  if (requestToken == null) {
    return res.status(403).json({ message: 'Refresh Token is required!' });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ token: requestToken });
    if (!refreshToken) {
      res.status(403).json({ message: 'Refresh token is not in database!' });
      return;
    }

    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.findByIdAndRemove(refreshToken._id, {
        useFindAndModify: false,
      }).exec();

      res.status(403).json({
        message: 'Refresh token was expired. Please make a new signin request',
      });
      return;
    }

    let newAccessToken = jwt.sign({ id: refreshToken.user }, tokenSecret, {
      expiresIn: '1h',
    });

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const resetToken = async (req, res) {
  
}

module.exports = { authCheck, refreshToken };
