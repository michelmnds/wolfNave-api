const mongoose = require("mongoose");

const personalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  speciality: { type: [String], required: true },
  image: { type: String, required: true },
  video: { type: String, default: "" },
  gender: { tpye: String },
});

const PersonalTrainer = mongoose.model("PersonalTrainer", personalSchema);

module.exports = PersonalTrainer;
