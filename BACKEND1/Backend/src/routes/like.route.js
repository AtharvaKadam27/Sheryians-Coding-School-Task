import express from "express";
import { postLike, postUnlike } from "../controllers/like.contro.js";
import userIdentity from "../middlewares/useridentity.js";

const likeRouter = express.Router();

likeRouter.post("/post/:postid", userIdentity, postLike);
likeRouter.delete("/post/unlike/:postid", userIdentity, postUnlike);
export default likeRouter;
