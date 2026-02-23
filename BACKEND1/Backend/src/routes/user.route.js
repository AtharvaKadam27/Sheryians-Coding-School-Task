import express from "express";
import {
  userAcceptFollowRequestController,
  userAllFollowRequestsController,
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
userRouter.get(
  "/follow/allfollowrequests",
  userIdentity,
  userAllFollowRequestsController,
);
userRouter.patch(
  "/follow/status/:requestId",
  userIdentity,
  userAcceptFollowRequestController,
);

export default userRouter;
