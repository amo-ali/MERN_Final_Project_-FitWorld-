const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const userController = require("./Controller/userController");
const bodyparser = require("body-parser");
const activityController = require("./Controller/activityController");

//port conection
app.listen(5000, () => {
  console.log("Port is Connected");
});
app.use(cors());

//DB Conection
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/Excercise", { useNewUrlParser: true })
  .then(() => {
    console.log("Database Connected");
  });
app.use(bodyparser.json());
app.use("/users", userController);
app.use("/activity", activityController);
