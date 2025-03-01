const express = require("express");
const { createReward } = require("../controllers/rewardController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createReward);

module.exports = router;
