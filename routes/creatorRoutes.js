const express = require("express");
const router = express.Router();

// Ensure the controller functions are properly imported
const { registerCreator, loginCreator, getProfile } = require("../controllers/creatorController");

// Ensure the authMiddleware is properly imported
const { protect } = require("../middleware/authMiddleware");

// Define routes correctly
router.post("/register", registerCreator);
router.post("/login", loginCreator);
router.get("/profile", protect, getProfile);

module.exports = router;
