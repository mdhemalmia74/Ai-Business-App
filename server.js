const express = require("express");
const app = express();

// FRONTEND ROUTE
app.get("/", (req, res) => {
  res.send(`
    <h1>AI Business App 🚀</h1>
    <button onclick="getIdea()">Get Idea</button>

    <script>
      async function getIdea() {
        const res = await fetch('/api/idea');
        const data = await res.json();
        alert(data.idea);
      }
    </script>
  `);
});

// API ROUTE (Step 1)
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

// SERVER START
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});// server.js
const express = require("express");
const app = express();

// -------- FRONTEND ROUTE --------
app.get("/", (req, res) => {
  res.send(`
    <h1>AI Business App 🚀</h1>
    <button onclick="getIdea()">Get Idea</button>

    <script>
      async function getIdea() {
        const res = await fetch('/api/idea');
        const data = await res.json();
        alert(data.idea);
      }
    </script>
  `);
});

// -------- API ROUTE --------
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

// -------- SERVER START --------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
