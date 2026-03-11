const songModel = require("../models/songs.model");
const id3 = require("node-id3");
const storageService = require("../services/storage.services");

async function uploadSong(req, res) {
  const songBuffer = req.file.buffer;
  const tags = id3.read(songBuffer);
  const [songFile, posterFile] = await Promise.all([
    storageService.uploadFile({
      buffer: songBuffer,
      filename: tags.title + ".mp3",
      folder: "/cohort-2/moodify/songs",
    }),
    storageService.uploadFile({
      buffer: tags.image.imageBuffer,
      filename: tags.title + ".jpeg",
      folder: "/cohort-2/moodify/posters",
    }),
  ]);

  const song = await songModel.create({
    url: songFile.url,
    posterUrl: poster.url,
    title: tags.title,
    mood: req.body.mood,
  });

  return res.status(201).json({
    message: "Song Created Successfully",
    song,
  });
}

async function getSongsByMood(req, res) {
  const mood = req.query.mood;
  const songs = await songModel.find({ mood });
  return res.status(200).json({
    message: "Songs fetched successfully",
    songs,
  });
}

module.exports = {
  uploadSong,
  getSongsByMood,
};
