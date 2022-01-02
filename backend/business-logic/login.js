const { User } = require('../data-access/db.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const RefreshToken = require('../models/RefreshToken.js');
const accessTokenSecret = process.env.ACCESS_TOKENSECRET;
const refreshTokenSecret = process.env.REFRESH_TOKENSECRET;

const loginManager = {
  read: async (loginemail, loginpass) => {
    try {
      const loginData = {
        email: loginemail,
        password: loginpass,
      };

      const mongoData = await User.findOne(
        { email: loginData.email },
        { email: true, password: true }
      )
        .select('+email')
        .select('+password');

      const mongoId = mongoData['_id'];

      const cryptCheck = async (p1, p2) => {
        await bcrypt.compare(p1, p2);
      };

      const accessToken = jwt.sign(
        {
          mongoId,
        },
        accessTokenSecret,
        {
          expiresIn: '1h',
        }
      );

      const refreshToken = jwt.sign(
        {
          mongoId,
        },
        refreshTokenSecret,
        {
          expiresIn: '24h',
        }
      );

      try {
        const newRefreshToken = await RefreshToken.create({
          user: mongoData._id,
          token: refreshToken,
          expiryDate: new Date(Date.now() + 86400000),
        });
        console.log('refresh token saved to db');
      } catch (err) {
        console.log(err.message);
      }

      return [
        cryptCheck(loginData.password, mongoData.password),
        accessToken,
        refreshToken,
      ];
    } catch (err) {
      console.log(err.message);
    }
  },
};

module.exports = loginManager;
