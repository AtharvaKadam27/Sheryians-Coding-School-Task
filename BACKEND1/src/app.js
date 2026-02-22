import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import postRouter from "./routes/post.route.js";
import userRouter from "./routes/user.route.js";
import likeRouter from "./routes/like.route.js";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/user", userRouter);
app.use("/api/like", likeRouter);

export default app;
