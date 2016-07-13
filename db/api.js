var knex = require('./knex');

module.exports = {
  listbooks: function () {
    return knex('book').select();
  }
};
