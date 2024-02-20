const express = require("express");
const logoutRouter = express.Router();
const { logout } = require("../controller/logout");

logoutRouter.post("/", logout);

module.exports = logoutRouter;
