import likeModel from "../models/like.model.js";

async function postLike(req, res) {
  try {
    const postid = req.params.postid;
    const username = req.user.username;

    const alreadyLiked = await likeModel.findOne({
      postId: postid,
      userName: username,
    });

    if (alreadyLiked) {
      return res
        .status(400)
        .json({ message: "You have already liked this post" });
    }

    const newLike = await likeModel.create({
      postId: postid,
      userName: username,
    });

    return res
      .status(201)
      .json({ message: "Post liked successfully", like: newLike });
  } catch (error) {
    console.error("Error liking post:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export { postLike };
