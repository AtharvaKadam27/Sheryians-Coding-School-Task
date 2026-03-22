import express from "express";

import {
  getMe,
  login,
  register,
  verifyEmail,
} from "../controllers/auth.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/verify-email", verifyEmail);
router.get("/get-me", authUser, getMe);

export default router;
