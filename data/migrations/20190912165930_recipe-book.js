
exports.up = function(knex) {
    //creates table for recipes
  return knex.schema
    .createTable('recipes', tbl => {

      //auto increments PK
    tbl.increments(); 

    //assign name of the individual recipe
    tbl.string('recipe_name').notNullable(); 
  })

  //creates table for ingredients
    .createTable('ingredients', tbl => {
    //auto increments PK
    tbl.increments();
    //because we don't want the same ingredient's name in our ingredients table.
    tbl.string('ingredient_name', 255)
        .unique()
        .notNullable(); 
  })
  //creates table for recipe_ingredients
    .createTable('recipe_ingredients', tbl => {

        tbl.increments();

        tbl.string('recipe_ingredients', 255)
        .notNullable();
        
        //Foreing Key column
        tbl.integer('ingredient_id') 
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
  })
  //creates table for instructions
    .createTable('instructions', tbl => {

  })
};

exports.down = function(knex) {
  
};
