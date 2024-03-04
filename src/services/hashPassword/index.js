const bcrypt = require('bcrypt');

async function criptPassword(password) {
  try {
    const saltRounds = 10; 
  
     const salt = await bcrypt.genSalt(saltRounds);
     console.log(salt);

    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    throw error;
  }
}

async function decriptPassword(passwordb,password){
  
  const senhaCorreta = await bcrypt.compare(passwordb,password);
  return senhaCorreta;
}
module.exports = {criptPassword,decriptPassword}