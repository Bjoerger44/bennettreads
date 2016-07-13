var find = require('../helper.js');

exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('author').select(),
    knex('book').select()
  ]).then(function (result) {
    var author = result[0];
    var book = result[1];
      return Promise.all([
        // Inserts seed entries
        knex('author_book').insert(
          {
            author_id: find.findFromList('Alex', author, "first_name"),
            book_id: find.findFromList('Python In A Nutshell', book, "title")
         })
      ]);
  });
};
