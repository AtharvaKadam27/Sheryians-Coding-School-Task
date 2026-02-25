import express from "express";
import multer from "multer";
import {
  postCreateController,
  getPostController,
  getPostDetailsController,
  getFeedController,
} from "../controllers/post.contro.js";
import userIdentity from "../middlewares/useridentity.js";

const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router();

postRouter.post(
  "/create",
  upload.single("image"),
  userIdentity,
  postCreateController,
);
postRouter.get("/all", userIdentity, getPostController);
postRouter.get("/details/:postid", userIdentity, getPostDetailsController);
postRouter.get("/feed", userIdentity, getFeedController);

export default postRouter;
