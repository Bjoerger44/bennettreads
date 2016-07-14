var express = require('express');
var router = express.Router();
var db = require('../db/api');

//Show Authors//

router.get('/authors', function(req, res, next) {
  db.listAuthors().then(function(data){
    res.render('listauthors', {author: data});
  });
});

module.exports = router;
