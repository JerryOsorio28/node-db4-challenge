const db = require('../data/db-config');

module.exports = {
    findRecipes,
    findShoppingList,
    findInstructions
};

function findRecipes () {
    return db('recipes');
};

function findShoppingList (id) {
    return db('ingredients as i')
        .join('recipe_ingredients as ri', 'i.id', 'ri.ingredient_id')
        .where({ recipe_id: id })
        .select('ingredient_name', 'quantity')
        // .on('r.recipe_id', 'i.recipe_id')
};

function findInstructions (id) {
    return db('instructions').where({ recipe_id: id })
};