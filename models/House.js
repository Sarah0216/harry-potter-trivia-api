const mongoose = require("mongoose");
const random = require("mongoose-simple-random");

const HouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

HouseSchema.plugin(random);

module.exports = mongoose.model("house", HouseSchema);
