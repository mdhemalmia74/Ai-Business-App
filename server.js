const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.get("/api/idea", (req, res) => {
  const ideas = [
    "Start a dropshipping business",
    "Create an AI chatbot service",
    "Open a digital marketing agency",
    "Build a mobile app startup",
    "Start a YouTube automation channel"
  ];

  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];

  res.json({
    idea: randomIdea
  });
});
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
