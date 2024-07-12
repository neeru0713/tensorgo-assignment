const authService = require("../services/authService");
const tokenService = require("../services/tokenService");
const register = async (req, res) => {
  try {
    let newUser = await authService.createUser(req.body);
    const token = await tokenService.generateAuthTokens(newUser);
    let resObj = {
      user: newUser,
      token,
      message: "User registered successfully",
    };

    res.status(201).json(resObj);
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ user: null, token: null, message: error.message });
  }
};

module.exports = {
  register,
};
