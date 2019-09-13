
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: .5 },
        { recipe_id: 1, ingredient_id: 2, quantity: .10 },
        { recipe_id: 1, ingredient_id: 3, quantity: .15 },
        { recipe_id: 1, ingredient_id: 4, quantity: .20 },
        { recipe_id: 1, ingredient_id: 5, quantity: .25 },
        { recipe_id: 1, ingredient_id: 6, quantity: .30 },
        { recipe_id: 2, ingredient_id: 7, quantity: .35 },
        { recipe_id: 2, ingredient_id: 8, quantity: .5 },
        { recipe_id: 2, ingredient_id: 9, quantity: .10 },
        { recipe_id: 2, ingredient_id: 2, quantity: .15 },
        { recipe_id: 2, ingredient_id: 3, quantity: .20 },
        { recipe_id: 2, ingredient_id: 10, quantity: .25 },
        { recipe_id: 3, ingredient_id: 11, quantity: .30 },
        { recipe_id: 3, ingredient_id: 12, quantity: .35 },
        { recipe_id: 3, ingredient_id: 13, quantity: .40 },
        { recipe_id: 3, ingredient_id: 14, quantity: .45 },
        { recipe_id: 4, ingredient_id: 14, quantity: .50 },
        { recipe_id: 4, ingredient_id: 15, quantity: .55 }
      ]);
    });
};
