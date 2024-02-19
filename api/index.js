const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/userRoute");

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.listen(3002, () => {
  console.log("app is running on 3002");
});
