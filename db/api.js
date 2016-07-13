var knex = require('./knex');

module.exports = {
  listbooks: function () {
    return knex('book').select();
  },
  findBookById: function(id) {
    return knex('book').select().where({id: id}).first();
  },
  addBook: function(book) {
    return knex('book').insert(book);
  },
  grabBook: function(id) {
    return knex('book').where({id: id}).select().first();
  },
  deletebook: function(id){
    return knex('book').where({id: id}).del();
  },
  editBook: function(id, book) {
    return knex('book').where({id: id}).update(book);
  },
};
