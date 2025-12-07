const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// Create feedback
router.post("/", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    const saved = await feedback.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all feedback
router.get("/", async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

// Update feedback
router.put("/:id", async (req, res) => {
  const updated = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(updated);
});

// Delete feedback
router.delete("/:id", async (req, res) => {
  await Feedback.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
