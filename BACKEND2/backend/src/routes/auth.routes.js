const { Router } = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/auth.controller.js");

const authRouter = Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);

module.exports = authRouter;
