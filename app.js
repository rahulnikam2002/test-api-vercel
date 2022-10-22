const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/user/user.model");

const port = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb+srv://codewithrahulnikam:rahulnikam2002@cluster0.iz5qb.mongodb.net/HealthAssist"
  )
  .then(() => console.log("Database connected!"))
  .catch((err) =>
    console.log("Error while making connection with database!", err.message)
  );

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/profile", async (req, res) => {
  const userEmail = "codewithrahulnikam@gmail.com";
  const model = await userModel.find({
    userEmail: userEmail,
  });
  console.log(model);
  res.json({
    login: true,
    username: "Rahul Nikam",
  });
});

app.listen(port, () => {
  console.log("Running on port 5000");
});

module.exports = app;
