import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      default: "",
    },
    imgUrl: {
      type: String,
      default: "",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "User is required for a post"],
    },
  },
  {
    timestamps: true,
  },
);

const postModel = mongoose.model("post", postSchema);
export default postModel;
