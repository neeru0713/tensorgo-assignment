const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  planName: { type: String, required: true },
  description: { type: String },
  price: { type: String, required: true },
  userLimit: { type: String, required: true },
  
});

module.exports = mongoose.model('Plan', planSchema);
