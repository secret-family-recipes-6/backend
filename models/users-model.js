const db = require("../database/dbConfig.js");

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db("users").select("id", "first_name", "last_name", "username").orderBy("id");
}

// return the role name together with the user data
function findBy(filter) {

    return db("users")

        .where(filter)
        .orderBy("users.id");
}

async function add(user) {
    try {
        const [id] = await db("users").insert(user, "id");

        return findById(id);
    } catch (error) {
        throw error;
    }
}

function findById(id) {
    return db("users").where({ id }).first();
}