var express = require('express'),
  router = express.Router(),
  Note = require('../models/Note.js');

/* GET /Notes */
router.get('/', function (req, res, next) {
  Note.getNotes(function (err, response) {
    console.log(response);
    if (err) {
      return next(err)
    }
    res.json(response);
  });
});

/* GET /Notes/id */
router.get('/:id', function (req, res, next) {
  Note.getNote(req.params.id, function (err, response) {
    if (err) {
      return next(err)
    }
    res.json(response);
  });
});

/* POST /Notes */
router.post('/', function (req, res, next) {
  Note.newNote(req.body, function (err, response) {
    if (err) {
      return next(err)
    }
    res.json(response);
  });
});

/* PUT /Notes/:id */
router.put('/:id', function (req, res, next) {
  Note.updateNote(req.params.id, req.body, function (err, response) {
    if (err) {
      return next(err)
    }
    res.json(response);
  });
});

/* DELETE /Notes/all */
router.delete('/all', function (req, res, next) {
  Note.deleteAll();
  res.json("All elements of the collection removed.");
});

/* DELETE /Notes/:id */
router.delete('/:id', function (req, res, next) {
  Note.deleteNote(req.params.id, function (err, response) {
    if (err) {
      return next(err)
    }
    res.json(response);
  }); 
});

module.exports = router;
