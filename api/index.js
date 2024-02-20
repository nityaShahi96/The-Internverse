const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const userRouter = require("./routes/userRoutes");
const logoutRouter = require("./routes/logoutRoutes");

app.use("/user", userRouter);
app.use("/logout", logoutRouter);

app.listen(4000, () => {
  console.log("app is running on 4000");
});
