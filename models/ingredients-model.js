const db = require("../database/dbConfig.js");

module.exports = {
    find,
    findById,
    findByRecipe,
    add,
    remove,
    update
};

function find() {
    return db('ingredients');
};

function findById(id) {
    return db('ingredients')
        .where({ id })
        .first();
}

//all ingredients for a given recipe

function findByRecipe(id) {
    return db('ingredients as i')
        .join('recipes as r', 'i.recipe_id', 'r.id')
        .select('i.recipe_id', 'i.id', 'i.ingredient')
        .where('r.id', id);
}

async function add(ingredient) {
    try {
        const [id] = await db('ingredients')
            .insert(ingredient, 'id');
        return findById(id);
    } catch (err) {
        throw err;
    }
};

function remove(id) {
    return db('ingredients')
        .where('id', Number(id))
        .del();
};

function update(id, changes) {
    return db('ingredients')
        .where('id', Number(id))
        .update(changes);
}