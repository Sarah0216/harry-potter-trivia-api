const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  score: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  wand: {
    type: String,
  },
  house: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("player", PlayerSchema);
