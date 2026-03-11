const mongoose = require("mongoose");

const songSchenma = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  posterUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  mood: {
    type: String,
    required: true,
    enum: {
      values: ["happy", "sad", "surprise"],
      message: "mood should be either happy, sad or surprise",
    },
  },
});

const songModel = mongoose.model("songs", songSchenma);

module.exports = songModel;
