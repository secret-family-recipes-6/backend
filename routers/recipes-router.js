const router = require('express').Router();
const Recipes = require('../models/recipes-model.js');
const auth = require('../auth/auth-middleware.js');




//gets all recipes

router.get('/', (req, res) => {
    Recipes.find()
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Unable to retrieve recipe list'
            });
        })
});

//gets a recipe with a specific id provided

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Recipes.findById(id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
});


//find all recipes from a specific user 

router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    Recipes.findByUser(id)
        .then(recipe => {
            if (recipe) {
                res.status(200).json(recipe);
            } else {
                res.status(404).json({ message: 'that user has no recipes' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
});


//add a new recipe

router.post('/', (req, res) => {
    const data = req.body;

    Recipes.add(data)
        .then(newRecipe => {
            res.status(201).json(newRecipe);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add new recipe' });
        });
});


//edits a recipe

router.put('/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    Recipes.update(id, changes)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to update the recipe with the specified id' })
        })
});


//deletes recipe with given ID

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Recipes.remove(id)
        .then(deleted => {
            if (deleted) {
                res.json({ removed: 'Recipe Deleted Sucessfully' });
            } else {
                res.status(404).json({ message: 'Could not find recipe with given id' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete recipe' });
        });
});



//get recipe's ingredients

router.get('/:id/ingredients', (req, res) => {
    Ingredients.findByRecipe(req.params.id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});


//get recipe's intructions

router.get('/:id/instructions', (req, res) => {
    Instructions.findByRecipe(req.params.id)
        .then(instruction => {
            res.status(200).json(instruction)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

module.exports = router;