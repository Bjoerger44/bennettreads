
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function(table){
    table.increments();
    table.string('title');
    table.string('genre');
    table.string('description');
    table.varchar(2000)('image');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book');
};
