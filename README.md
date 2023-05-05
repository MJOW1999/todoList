# todoList

# exercise-tracker

> Todo backend with MongoDB, Node and Express

## Table of contents

- [Technologies](#technologies)
- [Process](#process)
- [Features](#features)
  - [Future Changes](#what-i-would-do-with-more-experience-time)
- [Status](#status)
- [Contact](#contact)

## Technologies

- MongoDB
- Node.js
- Express

## Process

- Create backend folder with and `package.json` file with `npm init -y`.
- Install `express`, `nodemon`, `mongodb` and `dotenv`
- Download and install mongodb locally
- Create `todoList` database with a `tasks` collection
- Connect local database in `db.js` file
- Create a `server.js` file which initialises the express app, connects to the database and performs simple `GET` and `POST` requests
- Create `routes/tasks.js` which has intitial routes for the to do tasks.
- Create endpoints for tasks criteria
- Create endpoints for projects criteria

In Progress ...

## Features

- mongoDB database with two collections: `tasks` and `projects`

### What I would do with more experience/ time

This is my second project using mongoDB and first without mongoose. A few issues I had in adjustment to this was the following:

- **Code structure**: When initially looking at this project I wanted to structure it using _models_ and _controllers_ utilising mongoose.
  The structure would be more like:
- backend

  - config
    - db.js (_connect local db here, make it shared_)
  - controllers
    - tasksController.js (_add functionality here e.g search task by name_)
    - projectsController.js
  - routes
    - tasks.js (_modularise routes so they can be called in a single line in `server.js`. Unable to do this due to not getting shared db connection working_ )
    - projects.js
  - server.js (include necessary features (db connection, routes, etc.))

-

To-do list:

- [x] Create tasks collection
- [x] Create projects collection

## Status

Project is: _in progress_

## Contact

Created by [@MJOW1999](https://github.com/MJOW1999)

Feel free to contact me:

- Email: michael.jow.williams@gmail.com
- LinkedIn: [Michael Williams](https://www.linkedin.com/in/michael-williams-17a9b81a0)

Also follow my Twitter: [@michWills99](https://twitter.com/michWills99)
