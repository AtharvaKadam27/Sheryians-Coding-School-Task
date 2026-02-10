import User from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";

async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const userAlreadyExists = await User.findOne({
      $or: [{ email }, { name }],
    });

    if (userAlreadyExists) {
      return res.status(409).json({
        message:
          "User Already Exists" +
          (userAlreadyExists.email === email
            ? " with this Email"
            : " with this Name"),
      });
    }

    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(201).json({
      message: "User Registered Successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error in Registering User", error);
    res.status(500).json({
      message: "Internal Server Error while registering the user",
    });
  }
}

async function login(req, res) {
  try {
    const { email, name, password } = req.body;
    if ((!email && !name) || !password) {
      return res.status(400).json({
        message: "Email/Name and Password are required",
      });
    }

    // Invalid username/email or password
    const user = await User.findOne({
      $or: [{ email }, { name }],
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid username / email or password",
      });
    }

    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    if (hashedPassword !== user.password) {
      return res.status(401).json({
        message: "Invalid username / email or password",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      message: "User Logged In Successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error in Logging In User", error);
    res.status(500).json({
      message: "Internal Server Error while logging in the user",
    });
  }
}

export { register, login };
