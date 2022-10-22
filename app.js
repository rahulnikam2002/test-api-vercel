const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req,res) => {
    res.send("Express on Vercel");
});

app.listen(port, () => {
    console.log("Running on port 5000")
});

module.exports = app;