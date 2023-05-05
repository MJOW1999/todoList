require("dotenv").config();
const { connectToDb, getDb } = require("./config/db");

const express = require("express");
const routes = require("./routes/tasks");

// express app
const app = express();

// initialise middleware
app.use(express.json());

// connect to database
let db;

connectToDb((err) => {
  if (!err) {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
    db = getDb();
  }
});

// Get an array of the tasks in the database
app.get("/tasks", (req, res) => {
  let currentTasks = [];
  db.collection("tasks")
    .find()
    .sort()
    .forEach((task) => currentTasks.push(task))
    .then(() => res.status(200).json(currentTasks))
    .catch(() => {
      res.status(500).json({ error: "Coluld not fetch tasks" });
    });
});

app.post("/tasks", (req, res) => {
  const task = req.body;

  db.collection("tasks")
    .insertOne(task)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not create new task" });
    });
});
// routes
app.use("/tasks", routes);
