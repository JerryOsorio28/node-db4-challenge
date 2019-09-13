
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'Buns'},
        { ingredient_name: 'Lettuce'},
        { ingredient_name: 'Tomato'},
        { ingredient_name: 'Grilled Chicken'},
        { ingredient_name: 'American Cheese'},
        { ingredient_name: 'Secret Sauce'},
        { ingredient_name: 'Taco Shell'},
        { ingredient_name: 'Ground Beef'},
        { ingredient_name: 'Spicy Sauce'},
        { ingredient_name: 'Shredded Cheese'},
        { ingredient_name: 'Rice'},
        { ingredient_name: 'Salt'},
        { ingredient_name: 'Oil'},
        { ingredient_name: 'Water'},
        { ingredient_name: 'Coffee'}
      ]);
    });
};
