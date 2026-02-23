import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: [true, "Post is required for a like"],
    },
    userName: {
      type: String,
      required: [true, "User name is required for a like"],
    },
  },
  {
    timestamps: true,
  },
);

likeSchema.index({ postId: 1, userName: 1 }, { unique: true });

const likeModel = mongoose.model("like", likeSchema);

export default likeModel;
