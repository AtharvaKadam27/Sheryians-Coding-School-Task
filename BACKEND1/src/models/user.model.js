import mongoose from "mongoose";

const userScehema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: [true, "User name already exists"],
      required: [true, "User name is required"],
    },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    bio: String,
    profileImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model("user", userScehema);

export default userModel;
