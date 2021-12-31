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

      const accessToken = jwt.sign(
        {
          mongoData,
        },
        accessTokenSecret,
        {
          expiresIn: '5m',
        }
      );

      const refreshToken = jwt.sign(
        {
          mongoData,
        },
        refreshTokenSecret,
        {
          expiresIn: '6h',
        }
      );

      const cryptCheck = async (p1, p2) => {
        const checkResult = await bcrypt.compare(p1, p2);
        return [checkResult, accessToken];
      };

      return cryptCheck(loginData.password, mongoData.password);
    } catch (err) {
      console.log(err.message);
    }
  },
};

module.exports = loginManager;
