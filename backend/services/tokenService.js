const jwt = require("jsonwebtoken");
const generateToken = (userId, secret = "registerlogin") => {
  const payload = { _id: userId.toString() };
  const token = jwt.sign(payload, secret);
  return token;
};

const generateAuthTokens = async (user) => {
  let token = generateToken(user?._id);
  return token;
};

module.exports = {
  generateAuthTokens,
};
