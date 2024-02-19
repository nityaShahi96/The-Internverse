const express = require("express");
const userRouter = express.Router();
const { login, register } = require("../controller/user");

userRouter.post("/register", register);
userRouter.post("/login", login);

module.exports = userRouter;
