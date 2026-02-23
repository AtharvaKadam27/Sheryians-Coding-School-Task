import express from "express";
import { postLike } from "../controllers/like.contro.js";
import userIdentity from "../middlewares/useridentity.js";

const likeRouter = express.Router();

likeRouter.post("/post/:postid", userIdentity, postLike);

export default likeRouter;
