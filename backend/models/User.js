const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  organization: { type: String ,required: true, },
  plans: [{ type: mongoose.Schema.Types.ObjectId, ref: "Plan" }],
});

module.exports = mongoose.model("User", userSchema);
