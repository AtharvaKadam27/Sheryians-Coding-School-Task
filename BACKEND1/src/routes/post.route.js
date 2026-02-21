import express from "express";
import multer from "multer";
import {
  postCreateController,
  getPostController,
  getPostDetailsController,
} from "../controllers/post.contro.js";

const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router();

postRouter.post("/", upload.single("image"), postCreateController);
postRouter.get("/all", getPostController);
postRouter.get("/details/:postid", getPostDetailsController);
export default postRouter;
