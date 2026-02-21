import express from "express";
import {
  userFollowController,
  userUnFollowController,
} from "../controllers/user.contro.js";
import userIdentity from "../middlewares/useridentity.js";

const userRouter = express.Router();

userRouter.post("/follow/:followingname", userIdentity, userFollowController);
userRouter.post(
  "/unfollow/:followingname",
  userIdentity,
  userUnFollowController,
);

export default userRouter;
