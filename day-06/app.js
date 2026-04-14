const generateBtn = document.getElementById("generateBtn");
const topicInput = document.getElementById("topicInput");
const output = document.getElementById("output");

const API_TOKEN = "TOKEN_GOES_HERE";
const API_URL = "https://api-inference.huggingface.co/models/google/flan-t5-base";

const generateText = async () => {
    const topic = topicInput.value.trim();
  
    if (!topic) {
      output.innerHTML = "<p class='placeholder'>Please enter a topic first.</p>";
      return;
    }
  
    output.innerHTML = "<p class='placeholder'>Generating...</p>";
    generateBtn.disabled = true;
  
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
  
      const mockResponse = `Here is an AI-generated paragraph about "${topic}": 
      This topic is fascinating and worth exploring in depth. 
      When we consider the many dimensions of ${topic}, we begin to 
      understand its broader significance. Further research and 
      curiosity will reveal even more insights about this subject.`;
  
      output.innerHTML = "<p>" + mockResponse + "</p>";
  
    } catch (error) {
      output.innerHTML = "<p class='placeholder'>Something went wrong. Try again.</p>";
      console.log(error);
    } finally {
      generateBtn.disabled = false;
    }
  };

generateBtn.addEventListener("click", generateText);