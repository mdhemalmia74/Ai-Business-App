// server.js
const express = require("express");
const { Configuration, OpenAIApi } = require("openai"); // OpenAI setup

const app = express();

// --- OpenAI configuration ---
// 기존 require
// const { Configuration, OpenAIApi } = require("openai");

// new v4+ compatible require
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
// --- FRONTEND ROUTE ---
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

// --- API ROUTE ---
app.get("/api/idea", async (req, res) => {
  try {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: "Generate one unique AI business idea",
      max_tokens: 60,
    });

    const idea = response.choices[0].text.trim();
    res.json({ idea });
  } catch (error) {
    console.error(error);
    res.status(500).json({ idea: "Failed to generate idea" });
  }
});

// --- SERVER START ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
