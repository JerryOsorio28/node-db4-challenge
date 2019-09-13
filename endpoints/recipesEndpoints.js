//import express
const express = require('express');

//import router from express
const router = express.Router();

//import Recipes from database
const Recipes = require('./recipesModel');


//<----------------GET REQUESTS--------------------------
router.get('/', (req, res) => {

    Recipes.findRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => res.status(500).json(err.response))
})

router.get('/:id/shoppingList', (req, res) => {

    const { id } = req.params;

    Recipes.findShoppingList(id)
        .then(shoppingList => {
            res.status(200).json(shoppingList)
        })
        .catch(err => res.status(500).json(err.response))
    
})
router.get('/:id/instructions', (req, res) => {
    
    const { id } = req.params;

    Recipes.findInstructions(id)
        .then(instructions => {
            res.status(200).json(instructions)
        })
        .catch(err => res.status(500).json(err.response))
})


//export router
module.exports = router;