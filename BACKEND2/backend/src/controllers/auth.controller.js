const userModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const redis = require("../config/cache.js");

async function registerController(req, res) {
  const { username, email, password } = req.body;

  //   if (!username || !email || !password) {
  //     return res.status(400).json({ message: "All fields are required" });
  //   }

  const isAlreadyRegistered = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (isAlreadyRegistered) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  const newUser = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("token", token);
  return res.status(201).json({
    message: "User registered successfully",
    user: {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    },
  });
}

async function loginController(req, res) {
  const { username, email, password } = req.body;

  //   if (!username || !email || !password) {
  //     return res.status(400).json({ message: "All fields are required" });
  //   }

  const user = await userModel
    .findOne({
      $or: [{ email }, { username }],
    })
    .select("+password");

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isPasswordValid = await bcryptjs.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("token", token);
  return res.status(200).json({
    message: "User logged in successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

async function getMeController(req, res) {
  const user = await userModel.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({
    message: "User fetched successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

async function logoutController(req, res) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json({ message: "No token found" });
  }
  res.clearCookie("token");

  await redis.set(token, Date.now().toString(), "EX", 60 * 60);
  return res.status(200).json({ message: "User logged out successfully" });
}

module.exports = {
  registerController,
  loginController,
  getMeController,
  logoutController,
};
