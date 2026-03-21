const express = require("express");
const OpenAI = require("openai");

const app = express();

// OpenAI setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// FRONTEND
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

// API ROUTE (UPDATED ✅)
app.get("/api/idea", async (req, res) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: "Generate one unique AI business idea" }
      ],
      max_tokens: 60,
    });

    const idea = response.choices[0].message.content.trim();
    res.json({ idea });
  } catch (error) {
    console.error(error);
    res.status(500).json({ idea: "Failed to generate idea" });
  }
});

// SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
