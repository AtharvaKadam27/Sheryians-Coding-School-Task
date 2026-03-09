const { Router } = require("express");
const {
  registerController,
  loginController,
  getMeController,
  logoutController,
} = require("../controllers/auth.controller.js");
const authMiddleware = require("../middleware/auth.middleware.js");

const authRouter = Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.get("/get-me", authMiddleware, getMeController);
authRouter.get("/logout", authMiddleware, logoutController);

module.exports = authRouter;
