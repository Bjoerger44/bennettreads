
exports.seed = function(knex, Promise) {

      return Promise.all([
        // Inserts seed entries
        knex('book').insert({title: 'Python In A Nutsheel', genre:'Python', description:'Cool', image:'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/python_in_a_nutshell.jpg'}),
        knex('book').insert({title: 'Think Python', genre:'Python', description:'Cool', image:'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/think_python.jpg'}),
        knex('book').insert({title: 'Learning React Native', genre:'JavaScript', description:'Cool', image:'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/learning_react_native.jpg'})
      ]);
};
