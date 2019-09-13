
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, step_number: 1, instructions: 'Grab buns, lettuce, tomato, the grilled chicken, american cheese, the secret sauce.'},
        { recipe_id: 1, step_number: 2, instructions: 'Throw everything in the air, boom, krabby patty.'},
        { recipe_id: 2, step_number: 1, instructions: 'Grab taco shell, Ground Beef, Spicy Sauce, Shredded Cheese, Lettuce, Tomato'},
        { recipe_id: 2, step_number: 2, instructions: 'Throw everything in the air, boom, taco patty. Yes, that is something'},
        { recipe_id: 3, step_number: 1, instructions: 'Grab Rice, Oil, Water, mix...'},
        { recipe_id: 3, step_number: 2, instructions: 'Grab salt and throw it like "Salt Bae", it will come out just fine'},
        { recipe_id: 4, step_number: 1, instructions: 'Add coffee'},
        { recipe_id: 4, step_number: 2, instructions: 'Add water'},
        { recipe_id: 4, step_number: 3, instructions: 'Put coffee to brew'},
        { recipe_id: 4, step_number: 4, instructions: 'Throw it away, because no one like black coffee only.'}
      ]);
    });
};
