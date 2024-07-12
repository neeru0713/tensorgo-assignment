const User = require("../models/User.js");

const bcrypt = require("bcryptjs");

var SALT_WORK_FACTOR = 10;

async function createUser(userBody) {
  try {
    let userExists = await User.findOne({ email: userBody.email });
    if (userExists) {
      // Handle case where email already exists
      throw new Error("Email already taken");
    } else {
      const newUser = new User(userBody);
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      const hash = await bcrypt.hash(newUser.password, salt);
      newUser.password = hash;
      const result = await newUser.save();
      return result;
    }
  } catch (error) {
    console.error("Error creating user: ", error.message);
    throw error;
  }
}

module.exports = {
  createUser,
};
