
exports.up = function(knex) {
    //creates table for recipes
  return knex.schema
    .createTable('recipes', tbl => {

        tbl
            // auto increments PK
            .increments(); 

        tbl
            //Name of the individual recipe
            .string('recipe_name', 50)
            .notNullable(); 
    })

    //creates table for ingredients
    .createTable('ingredients', tbl => {

        tbl
            //auto increments PK
            .increments();
        tbl
            //because we don't want the same ingredient's name in our ingredients table
            .string('ingredient_name', 255)
            .unique()
            .notNullable()
    })

    //creates table for recipe_ingredients
    .createTable('recipe_ingredients', tbl => {

        //Foreing Key column
        tbl
            .integer('recipe_id', 255)
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            
         tbl
            .integer('ingredient_id') 
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl
            .integer('quantity', 255)
            .notNullable();
        })
        
    //creates table for instructions
    .createTable('instructions', tbl => {

            //Foreign Key
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl
            .integer('step_number')
            .unsigned()

        tbl
            .string('instructions', 2000)

        tbl.primary(['recipe_id', 'step_number'])
            
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
