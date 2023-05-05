const express = require("express");

const router = express.Router();

// All tasks
router.get("/", (req, res) => {
  res.json({ message: "GET All tasks" });
});

// Get a single task
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single task" });
});

// POST
router.post("/", (req, res) => {
  res.json({ message: "POST a new task" });
});

// DELETE
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a task" });
});

// PATCH
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a task" });
});
module.exports = router;
