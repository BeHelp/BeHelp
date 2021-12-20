const bcrypt = require('bcryptjs');

const hashing = async (password) => {
    const salt = 10;
    const newPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, salt, function(err, hash) {
        if (err) reject(err)
        resolve(hash)
      });
    })
    return newPassword;
    };

module.exports = hashing;