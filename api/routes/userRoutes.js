const express = require("express");
const userRouter = express.Router();
const { loginEmployer, loginStudent, register } = require("../controller/user");

userRouter.post("/register", register);
userRouter.post("/studentlogin", loginStudent);
userRouter.post("/employerLogin", loginEmployer);

module.exports = userRouter;
