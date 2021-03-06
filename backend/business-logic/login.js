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

      const passwordIsValid = await bcrypt.compare(
        loginData.password,
        mongoData.password
      );

      // console.log(`passwordIsValid: ${passwordIsValid}`);

      if (!passwordIsValid) {
        console.log('Login failed');
        return [false, null, null];
      }

      console.log('Login successful');

      const userData = await User.findOne({ email: loginData.email }).select(
        '+email'
      );

      const jwtData = [];
      jwtData.push(userData['_id']);
      jwtData.push(userData['email']);
      jwtData.push(userData['firstName']);
      jwtData.push(userData['lastName']);
      jwtData.push(userData['photoURL']);

      const accessToken = jwt.sign(
        {
          jwtData,
        },
        accessTokenSecret,
        {
          expiresIn: '1h',
        }
      );

      const refreshToken = jwt.sign(
        {
          jwtData,
        },
        refreshTokenSecret,
        {
          expiresIn: '24h',
        }
      );

      // console.log(
      //   `accessToken: \n${accessToken}`,
      //   `\nrefreshToken: \n${refreshToken}`
      // );

      await RefreshToken.create({
        user: mongoData._id,
        token: refreshToken,
        expiryDate: new Date(Date.now() + 86400000),
      });
      console.log('refresh token saved to db');

      return [passwordIsValid, accessToken, refreshToken];
    } catch (err) {
      console.log(err.message);
    }
  },
};

module.exports = loginManager;
