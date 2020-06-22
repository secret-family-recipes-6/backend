const db = require("../database/dbConfig.js");


module.exports = {
    find,
    findByUser,
    findById,
    add,
    remove,
    update
};


function find() {
    return db('recipes');
};



function findById(id) {
    return db('recipes')
        .where({ id })
        .first();
};

function findByUser(user_id) {
    return db('recipes')
        .where({ user_id })
        .first();


}

async function add(recipe) {
    try {
        const [id] = await db('recipes')
            .insert(recipe, 'id');
        return findById(id);
    } catch (err) {
        throw err;
    }
};


function remove(id) {
    return db('recipes')
        .where('id', Number(id))
        .del();
}


function update(id, changes) {
    return db('recipes')
        .where('id', Number(id))
        .update(changes);
}