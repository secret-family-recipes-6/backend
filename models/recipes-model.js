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
        .first()
        .where({ id })

};


// .join('ingredients', 'ingredients.recipe_id', 'recipes.id')
//         .where('recipes.id', id)
//         .select('ingredients.ingredient')


// SELECT title, ingredient, instruction
// FROM INGREDIENTS as i
// JOIN RECIPES as r ON i.recipe_id = r.id
// JOIN INSTRUCTIONS as ins ON ins.recipe_id = r.id



function findByUser(user_id) {
    return db('recipes')
        .where({ user_id })


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