var MongoClient = require('mongodb').MongoClient;

//Database named after my slack username
var url = "mongodb://localhost:27017/stchawenzy";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created by Stchawenzy");
  db.close();
});