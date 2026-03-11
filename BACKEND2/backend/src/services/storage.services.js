const { ImageKit, toFile } = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: "your api key",
});

async function uploadToImageKit(buffer, filename, folder = "") {
  const file = await client.files.upload({
    files: await toFile(Buffer.from(buffer), "file"),
    fileName: filename,
    folder: folder,
  });

  return file;
}

module.exports = { uploadToImageKit };
