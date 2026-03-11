const express = require("express");
const upload = require("../middleware/upload.middleware.js");
const {
  uploadSong,
  getSongsByMood,
} = require("../controllers/song.controller.js");

const router = express.Router();

router.post("/", upload.single("song"), uploadSong);
router.get("/", getSongsByMood);
module.exports = router;
