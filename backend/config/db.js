const { MongoClient } = require("mongodb");

let dbConnection;

// Connect to local MongoDB database with MongoClient
module.exports = {
  connectToDb: (callback) => {
    MongoClient.connect("mongodb://localhost:27017/todoList")
      .then((client) => {
        dbConnection = client.db();
        return callback();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getDb: () => dbConnection,
};
