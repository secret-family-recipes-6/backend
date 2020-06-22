const router = require('express').Router();
const Ingredients = require('../models/ingredients-model');
const auth = require('../auth/auth-middleware.js');


router.get('/', (req, res) => {
    Ingredients.find()
        .then(ingredient => {
            res.status(200).json(ingredient);

        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to retrieve data' })
        })
})

//find ingredient by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Ingredients.findById(id)
        .then(ingredient => {
            res.status(200).json(ingredient);
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
});

//add a new ingredient
router.post('/', (req, res) => {
    const newIngredient = req.body;
    Ingredients.add(newIngredient)
        .then(Ingredient => {
            res.status(201).json({ Added: Ingredient })
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to add ingredient' })
        })
});

//update ingredients 
router.put('/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    Ingredients.update(id, changes)
        .then(ingredient => {
            res.status(200).json({ Updated: `ingredient_id  ${id}` })
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to update the ingredient with the specified id' })
        })
});

//delete ingredient with a given id
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Ingredients.remove(id)
        .then(deleted => {
            if (deleted) {
                res.json({ removed: deleted });
            } else {
                res.status(404).json({ message: 'Could not find ingredient with given id' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete ingredient' });
        });
});
module.exports = router;