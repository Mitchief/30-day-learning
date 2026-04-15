const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

app.listen(3000, () => {
    console.log("Day 9 API running - nodemon is watching");
});