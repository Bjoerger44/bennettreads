var express = require('express');
var router = express.Router();
var db = require('../db/api');

//Show books //

router.get('/books', function(req, res, next) {
  db.listbooks().then(function(data){
    res.render('listbooks', {books: data});
  });
});


//Add a book//

router.get('/books/addbooks', function(req, res, next){
  res.render('addbook');
});

  router.post('/books/addbooks', function(req, res, next){
    var book = {
      title: req.body.title,
      genre: req.body.genre,
      description: req.body.description,
      image: req.body.image
    };
    db.addBook(book).then(function(){
      res.redirect('/books');
    });
  });

    //Show book details//

    router.get('/books/:id', function(req, res, next){
      console.log(req.params.id);
      db.findBookById(req.params.id).then(function(data){
        res.render('bookdetail', {book: data});
      });
    });
//Delete Book//

router.get('/books/:id/deletebook', function(req, res, next) {
 db.deletebook(req.params.id).then(function(){
   res.redirect('/books');
 }).catch(function(error) {
     next(error);
 });
});


module.exports = router;
