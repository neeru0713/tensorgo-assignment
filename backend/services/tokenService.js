const jwt = require("jsonwebtoken");
const generateToken = (userId) => {
  console.log("process.env.JWT_SECRET ", process.env.JWT_SECRET)
  const payload = { _id: userId.toString() };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

const generateAuthTokens = async (user) => {
  let token = generateToken(user?._id);
  return token;
};

module.exports = {
  generateAuthTokens,
};
