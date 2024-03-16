const express = require("express");
const logoutRouter = express.Router();
const { logout } = require("../controller/logout");

logoutRouter.get("/", logout);

module.exports = logoutRouter;
