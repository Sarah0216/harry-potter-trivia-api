const mongoose = require("mongoose");
const random = require("mongoose-simple-random");

const WandSchema = new mongoose.Schema({
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

WandSchema.plugin(random);

module.exports = mongoose.model("wand", WandSchema);
