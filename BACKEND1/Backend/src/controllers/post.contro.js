import postModel from "../models/post.model.js";
import ImageKit, { toFile } from "@imagekit/nodejs";
import likeModel from "../models/like.model.js";

const client = new ImageKit({
  privateKey: "private_rSo3GrjsZHD0gV08eyGXK3GjMy4=",
});

async function postCreateController(req, res) {
  try {
    const file = await client.files.upload({
      file: await toFile(Buffer.from(req.file.buffer), "file"),
      fileName: "Test",
      folder: "cohort-2-insta-clone-posts",
    });

    const post = await postModel.create({
      caption: req.body.caption,
      imgUrl: file.url,
      user: req.user.id,
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
    const allPost = await postModel.find({ user: req.user.id });

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
    const postId = req.params.postid;
    const postDetails = await postModel.findOne({
      _id: postId,
      user: req.user.id,
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

async function getFeedController(req, res) {
  try {
    const user = req.user;
    const feed = await Promise.all(
      (await postModel.find({}).populate("user").lean()).map(async (post) => {
        const isLiked = await likeModel.findOne({
          postId: post._id,
          userName: req.user.username,
        });

        post.isLiked = Boolean(isLiked);
        return post;
      }),
    );

    res.status(200).json({
      success: true,
      message: "Feed fetched successfully",
      posts: feed,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error fetching feed",
      error: error.message,
    });
  }
}

export {
  postCreateController,
  getPostController,
  getPostDetailsController,
  getFeedController,
};
