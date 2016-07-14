var express = require('express');
var router = express.Router();
var db = require('../db/api');

//Show Authors//

router.get('/', function(req, res, next) {
  db.listAuthors().then(function(data){
    res.render('listauthors', {author: data});
  });
});

//Add Authors//

router.get('/addauthors', function(req, res, next){
  res.render('addauthor');
});

  router.post('/addauthors', function(req, res, next){
    var author = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      description: req.body.description,
      image: req.body.image
    };
    db.addAuthor(author).then(function(){
      res.redirect('/authors');
    });
  });
module.exports = router;
