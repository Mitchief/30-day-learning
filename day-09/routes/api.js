const express = require("express");
const router = express.Router();

const { generate, health } = require("../controllers/generateController");

router.get("/health", health);
router.post("/generate", generate);

module.exports = router;