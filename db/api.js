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
  listAuthors: function() {
    return knex('author').select();
  },

  addAuthor: function(author) {
    return knex('author').insert(author);
  },

  getAuthor: function(id) {
    return knex('author').where({ id: id }).select().first();
  },

  deleteAuthor: function(id) {
    return knex('author').where({ id: id }).del();
  },

  editAuthor: function(id, author) {
    return knex('author').where({id: id}).update(author);
  }
};
