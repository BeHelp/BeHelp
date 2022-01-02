const { User } = require('../data-access/db.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
