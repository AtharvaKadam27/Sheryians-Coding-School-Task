import mongoose from "mongoose";

const followSchema = new mongoose.Schema(
  {
    follower: {
      type: String,
      required: true,
    },
    following: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// followSchema.index({ follower: 1, following: 1 }, { unique: true });
followSchema.index({ follower: 1, following: 1 }, { unique: true });

const followModel = mongoose.model("Follow", followSchema);

export default followModel;
