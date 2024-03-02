const bcrypt = require('bcrypt');

async function hashPassword(password) {
  try {
    const saltRounds = 10; 

    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    throw error;
  }
}
module.exports = {hashPassword}