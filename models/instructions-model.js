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
    return db('instructions');
};

function findById(id) {
    return db('instructions')
        .where({ id })
        .first();
};

function findByRecipe(id) {
    return db('instructions as i')
        .join('recipes as r', 'i.recipe_id', 'r.id')
        .select('i.recipe_id', 'i.instruction')
        .where('r.id', id);
};

async function add(instruction) {
    try {
        const [id] = await db('instructions')
            .insert(instruction, 'id');
        return findById(id);
    } catch (err) {
        throw err;
    }
};

function remove(id) {
    return db('instructions')
        .where('id', Number(id))
        .del();
};

function update(id, changes) {
    return db('instructions')
        .where('id', Number(id))
        .update(changes);
}