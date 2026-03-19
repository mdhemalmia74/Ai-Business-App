const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Ai Business App is running 🚀");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on port " + port);
});
