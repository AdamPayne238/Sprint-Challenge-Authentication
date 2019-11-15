
exports.seed = function(knex, Promise) {
  return knex('users')
    //add truncate to delete entries and reset ids
    .truncate()
    .then(function(){
      return knex('users').insert([
        {username: 'adam', password: 'adam@gmail.com'},
        {username: 'bae', password: 'bae@gmail.com'},
        {username: 'notadam', password: 'notadam@gmail.com'},
        {username: 'user', password: 'user@gmail.com'},
      ]);
    })
};
