exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl.string('first_name', 128)
            .notNullable();
        tbl.string('last_name', 128)
            .notNullable();
        tbl.string('username', 128)
            .unique()
            .notNullable();
        tbl.string('password', 128)
            .notNullable();
        tbl.string('email', 255)
            .notNullable()
            .unique();
    })
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('title', 255)
                .notNullable()
                .index();
            tbl.integer("user_id")
                .unsigned()
                .references("users.id")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl.string('source', 128)
                .notNullable();
            tbl.text('category')
                .notNullable();
            tbl.string('recipe_img');

        })

        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient')
                .notNullable()


            tbl.integer("recipe_id")
                .unsigned()
                .references("recipes.id")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");


        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer("recipe_id")
                .unsigned()
                .references("recipes.id")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");

            tbl.text('instruction')
                .notNullable();
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
        .dropTableIfExists('users')



};