const mongoose = require("mongoose");
const activity = mongoose.Schema({
  activityType: { required: true, type: String },
  date: { required: true, type: String },

  duration: { required: true, type: String },

  calories: { required: true, type: String },
  steps: { required: true, type: String },
});
module.exports = mongoose.model("ExerciseActivity", activity);
