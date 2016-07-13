var express = require('express');
var router = express.Router();
var db = require('../db/api');

/* GET users listing. */
router.get('/books', function(req, res, next) {
  db.listbooks().then(function(books){
    res.render('listbooks', {books: books});
  });
});

module.exports = router;
