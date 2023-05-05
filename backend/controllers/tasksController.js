const { getDb } = require("../config/db");
const db = getDb();

const getTasks = (req, res) => {
  let currentTasks = [];
  db.collection("tasks")
    .find()
    .sort()
    .forEach((task) => currentTasks.push(task))
    .then(() => res.status(200).json(currentTasks))
    .catch(() => {
      res.status(500).json({ error: "Could not fetch tasks" });
    });
};

module.exports = {
  getTasks,
};
