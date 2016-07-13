
exports.seed = function(knex, Promise) {
  return Promise.all([
        knex('author').insert({first_name: 'Alex', last_name: 'Martelli', description:'Alex is a great guy',image:'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg'}),
        knex('author').insert({first_name: 'Allen B.', last_name: 'Downey', description:'Alex is great',image:'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg'}),
        knex('author').insert({first_name: 'Bonnie', last_name: 'Eisenman', description:'Bonnie is great',image:'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg'})
      ]);
};
