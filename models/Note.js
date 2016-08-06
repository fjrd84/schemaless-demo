var MongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  ObjectID = require('mongodb').ObjectID,
  collectionName = 'notes',
  mongoDbPath = "mongodb://localhost/notesApp";

var Note = {
  getNotes: function (callback) {
    MongoClient.connect(mongoDbPath, function (err, db) {
      if (err) {
        callback(err, null);
      }

      var collection = db.collection(collectionName);

      collection.find().toArray(function (err, Notes) {
        callback(err, Notes);
      });
    });
  },
  getNote: function (id, callback) {
    var obj_id = new ObjectID(id);

    MongoClient.connect(mongoDbPath, function (err, db) {
      if (err) {
        callback(err, null);
      }

      var collection = db.collection(collectionName);
      collection.findOne({"_id": obj_id}, callback);
    });
  },
  newNote: function (Note, callback) {
    MongoClient.connect(mongoDbPath, function (err, db) {
      if (err) {
        callback(err, null);
      }
      var collection = db.collection(collectionName);
      collection.insert(Note, function (err, records) {
        callback(err, records);
      });
    });
  },
  updateNote: function (id, Note, callback) {
    var obj_id = new ObjectID(id);

    MongoClient.connect(mongoDbPath, function (err, db) {
      if (err) {
        callback(err, null);
      }

      var collection = db.collection(collectionName);
      collection.update({"_id": obj_id}, Note, callback);
    });
  },
  deleteNote: function (id, callback) {
    var obj_id = new ObjectID(id);

    MongoClient.connect(mongoDbPath, function (err, db) {
      if (err) {
        callback(err, null);
      }

      var collection = db.collection(collectionName);
      collection.deleteOne({"_id": obj_id}, callback);
    });
  },
  deleteAll: function () {
    MongoClient.connect(mongoDbPath, function (err, db) {
      if (err) {
        callback(err, null);
      }
      var collection = db.collection(collectionName);
      collection.deleteMany({});
    });
  }
};

module.exports = Note;
