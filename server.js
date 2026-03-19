const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI server is running");
});

app.post("/chat", (req, res) => {
  const message = req.body.message;

  let reply = "Thanks for your message!";

  if (message.includes("price")) {
    reply = "We will send you price details soon.";
  }

  res.json({ reply });
});

app.listen(3000, () => {
  console.log("Server running");
});
