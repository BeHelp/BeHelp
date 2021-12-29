const { User, mongoose } = require('../data-access/db.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenSecret = process.env.TOKENSECRET;

const loginManager = {
  read: async (user, pass) => {
    const loginData = {
      email: user,
      password: pass,
    };
    try {
      const user = await User.findOne({ email: loginData.email }).select(
        '+password'
      );
      const token = jwt.sign(
        {
          user,
        },
        tokenSecret,
        {
          expiresIn: '15m',
        }
      );

      const cryptCheck = async (p1, p2) => {
        const checkResult = await bcrypt.compare(p1, p2);
        return [checkResult, token];
      };

      return cryptCheck(loginData.password, user.password);
    } catch (err) {
      console.log(err.message);
    }
  },
};

module.exports = loginManager;
