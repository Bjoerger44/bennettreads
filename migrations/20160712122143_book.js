
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function(table){
    table.increments();
    table.string('title');
    table.string('genre');
    table.string('description');
    table.string('image');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book');
};
