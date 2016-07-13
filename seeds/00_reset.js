exports.seed = function(knex, Promise) {
  return knex('author_book').del()
  .then(function() {
    return knex('author').del();
}).then(function () {
  return knex('book').del();
});
};
