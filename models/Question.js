const mongoose = require("mongoose");
const random = require("mongoose-simple-random");

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  point: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

QuestionSchema.plugin(random);

module.exports = mongoose.model("question", QuestionSchema);
