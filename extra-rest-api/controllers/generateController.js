const health = (req, res) => {
    res.json({
      status: "ok",
      message: "API is running",
      timestamp: new Date().toISOString()
    });
  };
  
  const generate = (req, res) => {
    const { topic } = req.body;
  
    if (!topic) {
      return res.status(400).json({
        error: "Topic is required",
        hint: "Send a JSON body with a topic field"
      });
    }
  
    if (topic.length < 3) {
      return res.status(400).json({
        error: "Topic too short",
        hint: "Topic must be at least 3 characters"
      });
    }
  
    const result = `Here is a generated response about "${topic}". 
    This is coming from your structured Node.js API on Day 9. 
    Tomorrow we replace this with a real AI response.`;
  
    res.json({
      success: true,
      topic: topic,
      result: result,
      timestamp: new Date().toISOString()
    });
  };
  
  module.exports = { health, generate };