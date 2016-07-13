
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author',  function(table){
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('description');
    table.string('image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author');
};
