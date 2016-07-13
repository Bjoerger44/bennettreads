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
  
  deletebook: function(id){
    return knex('book').where({id: id}).del();
  }
};
