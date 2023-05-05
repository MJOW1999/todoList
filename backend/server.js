require("dotenv").config();
const { connectToDb, getDb } = require("./config/db");

const express = require("express");
const routes = require("./routes/tasks");
const { ObjectId } = require("mongodb");

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

// List all tasks
app.get("/tasks", (req, res) => {
  let currentTasks = [];
  db.collection("tasks")
    .find()
    .sort()
    .forEach((task) => currentTasks.push(task))
    .then(() => res.status(200).json(currentTasks))
    .catch(() => {
      res.status(500).json({ error: "Could not fetch tasks" });
    });
});

// Search by name
app.get("/tasks/:name", (req, res) => {
  let names = [];

  db.collection("tasks")
    .find({ name: req.params.name })
    .forEach((task) => names.push(task))
    .then(() => {
      if (names != []) {
        res.status(200).json(names);
      } else {
        res.status(200).json({
          message: "Successful search. However no tasks of that name found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "No task of that name found" });
    });
});

// Create a new task in the database
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

// Edit Task
app.patch("/tasks/:id", (req, res) => {
  const updateTask = req.body;
  // Check task exists to be edited
  if (ObjectId.isValid(req.params.id)) {
    db.collection("tasks")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updateTask })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: "Could not update the task" });
      });
  } else {
    res
      .status(500)
      .json({ error: "Task could not be updated, as it doesn't exist" });
  }
});

// Delete Task
app.delete("/tasks/:id", (req, res) => {
  // Check if the task exists
  if (ObjectId.isValid(req.params.id)) {
    db.collection("tasks")
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: "Could not delete the task" });
      });
  } else {
    res
      .status(500)
      .json({ error: "Task could not be deleted, as it doesn't exist" });
  }
});

// routes
app.use("/tasks", routes);
