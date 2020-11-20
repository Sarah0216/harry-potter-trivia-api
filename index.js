const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./database/db");
const Question = require("./models/Question");
const Player = require("./models/Player");
const House = require("./models/House");
const Wand = require("./models/Wand");

const shuffle = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

db();
app.use(cors());
app.use(express.static("assets"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Sarah and Nahid's API!",
  });
});

app.get("/random", (req, res) => {
  Question.findRandom({}, {}, { limit: 10 }, function (err, results) {
    if (!err) {
      const shuffledResults = results.map((item) => ({
        ...item._doc,
        options: shuffle(item._doc.options),
      }));
      res.status(200).json(shuffledResults);
    }
  });
});

app.get("/random", (req, res) => {
  Question.findRandom({}, {}, { limit: 2 }, function (err, results) {
    if (!err) {
      const shuffledResults = results.map((item) => ({
        ...item._doc,
        options: shuffle(item._doc.options),
      }));
      res.status(200).json(shuffledResults);
    }
  });
});

app.get("/leaderboard", (req, res) => {
  Player.find().then((response) => res.status(200).json(response));
});

app.post("/player", (req, res) => {
  console.log(req.body);
  const player = new Player({
    score: req.body.score,
    name: req.body.name,
    score: req.body.score,
  });
  player.save().then((response) => res.status(200).json(response));
});

app.get("/random-hat", (req, res) => {
  House.findRandom({}, {}, { limit: 1 }, function (houseErr, houseResults) {
    if (!houseErr) {
      Wand.findRandom({}, {}, { limit: 1 }, function (wandErr, wandResults) {
        if (!wandErr) {
          res
            .status(200)
            .json([{ house: houseResults }, { wand: wandResults }]);
        }
      });
    }
  });
});

app.listen(process.env.PORT || 7000, () => console.log("server started"));
