
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Grilled Burger'},
        { recipe_name: 'Tacos'},
        { recipe_name: 'Rice & Beans'},
        { recipe_name: 'Coffee'}
      ]);
    });
};
