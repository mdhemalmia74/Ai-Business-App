app.get("/api/idea", async (req, res) => {
  const ideas = [
    "AI-powered resume builder for job seekers",
    "Smart chatbot for small businesses",
    "AI social media content generator",
    "AI fitness coach app",
    "AI product description generator for Amazon sellers",
    "AI language learning assistant",
    "AI-based dropshipping product finder",
    "AI video script generator",
    "AI logo creator for startups"
  ];

  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  res.json({ idea: randomIdea });
});
