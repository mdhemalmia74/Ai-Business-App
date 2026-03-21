const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>AI Business App 🚀</h1>
    <button onclick="getIdea()">Get AI Idea</button>

    <script>
      async function getIdea() {
        const res = await fetch('/api/idea');
        const data = await res.json();
        alert(data.idea);
      }
    </script>
  `);
});

app.get("/api/idea", (req, res) => {
  const ideas = [
    "AI resume builder",
    "AI chatbot for business",
    "AI logo creator",
    "AI content generator",
    "AI fitness app"
  ];

  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  res.json({ idea: randomIdea });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
