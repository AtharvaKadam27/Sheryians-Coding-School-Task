import jwt from "jsonwebtoken";
import postModel from "../models/post.model.js";
import ImageKit, { toFile } from "@imagekit/nodejs";

const client = new ImageKit({
  privateKey: "private_+gsblrfYJsYSHs3AcfF5qiZis24=",
});

async function postCreateController(req, res) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not provided, Unauthorized access",
      });
    }
    let decode = "";
    try {
      decode = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid token, Unauthorized access",
      });
    }

    const file = await client.files.upload({
      file: await toFile(Buffer.from(req.file.buffer), "file"),
      fileName: "Test",
      folder: "cohort-2-insta-clone-posts",
    });

    const post = await postModel.create({
      caption: req.body.caption,
      imgUrl: file.url,
      user: decode.id,
    });
    res.status(201).json({
      success: true,
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error creating post",
      error: error.message,
    });
  }
}

async function getPostController(req, res) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not provided, Unauthorized access",
      });
    }
    let decode = "";
    try {
      decode = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid token, Unauthorized access",
      });
    }

    const allPost = await postModel.find({ user: decode.id });

    res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      posts: allPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error fetching posts",
      error: error.message,
    });
  }
}

async function getPostDetailsController(req, res) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not provided, Unauthorized access",
      });
    }
    let decode = "";
    try {
      decode = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid token, Unauthorized access",
      });
    }

    const postId = req.params.postid;
    const postDetails = await postModel.findOne({
      _id: postId,
      user: decode.id,
    });

    if (!postDetails) {
      return res.status(404).json({
        success: false,
        message: "Post not found or unauthorized access",
      });
    }

    res.status(200).json({
      success: true,
      message: "Post details fetched successfully",
      postDetails,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error fetching post details",
      error: error.message,
    });
  }
}

export { postCreateController, getPostController, getPostDetailsController };
