const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());

const userRouter = require("./routes/userRoutes");
const logoutRouter = require("./routes/logoutRoutes");
const jwtVerify = require("./middleware/jwtVerify");

app.use("/user", userRouter);
app.use(jwtVerify.verifyToken);
app.use("/logout", logoutRouter);

app.listen(port, () => {
  console.log("app is running on 4000");
});
