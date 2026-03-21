const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>AI Business App 🚀</h1>
    <button onclick="getIdea()">Get AI Idea</button>

    <script>
      async function getIdea() {
        try {
          const res = await fetch('/api/idea');
          const data = await res.json();
          alert(data.idea);
        } catch(err) {
          alert("Failed to get idea");
        }
      }
    </script>
  `);
});

app.get("/api/idea", (req, res) => {
  const ideas = [
    "AI-powered resume builder for job seekers",
    "Smart chatbot for small businesses",
    "AI social media content generator",
    "AI fitness coach app",
    "AI product description generator for Amazon sellers",
    "AI language learning assistant",
    "AI dropshipping product finder",
    "AI video script generator",
    "AI logo creator for startups"
  ];

  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  res.json({ idea: randomIdea });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
