const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  planName: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  userLimit: { type: Number, required: true },
  
});

module.exports = mongoose.model('Plan', planSchema);
