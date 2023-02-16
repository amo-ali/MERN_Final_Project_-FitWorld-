const mongoose = require("mongoose");
const user = mongoose.Schema({
  name: { required: true, type: String },
  ft: { required: true, type: String },

  inches: { required: true, type: String },

  weight: { required: true, type: String },
  age: { required: true, type: String },
});

module.exports = mongoose.model("User", user);
