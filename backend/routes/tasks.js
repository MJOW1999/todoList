const express = require("express");
const { getTasks } = require("../controllers/tasksController");
const router = express.Router();

// All tasks
router.get("/tasks", getTasks);

// Get a single task
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single task" });
});

// Create a new task
router.post("/", (req, res) => {
  res.json({ message: "POST a new task" });
});

// Delete a task
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a task" });
});

// Update a task
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a task" });
});
module.exports = router;
