const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from your Express server!",
    day: 8,
    status: "working"
  });
});

app.post("/api/generate", (req, res) => {
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: "Topic is required" });
  }

  res.json({
    topic: topic,
    result: `Here is a server-generated response about "${topic}". This came from your Node.js backend.`
  });
});

app.listen(3000, () => {
  console.log("Express server running at http://localhost:3000");
});