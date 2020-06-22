exports.seed = function (knex) {
  return knex('ingredients')
    .then(function () {
      return knex('ingredients').insert([
        { recipe_id: 1, ingredient: '1 tablespoon olive oil' },
        { recipe_id: 1, ingredient: '6 or 7 slices of bacon, cut into 1/2-inch pieces' },
        { recipe_id: 1, ingredient: '1 small yellow onion, chopped into tiny pieces' },
        { recipe_id: 1, ingredient: '5 cloves of garlic, cut into thin slices' },
        { recipe_id: 1, ingredient: '1 teaspoon black pepper' },
        { recipe_id: 1, ingredient: '1 1/2 teaspoon parsley' },
        { recipe_id: 1, ingredient: '10-12 ounces pasta (linguine, fettuccine, or spaghetti)' },
        { recipe_id: 1, ingredient: '1 cup grated parmesan plus more as needed' },
        { recipe_id: 1, ingredient: '2 egg yolks' },
        { recipe_id: 1, ingredient: 'The grated zest and juice of 1 lemon' },
        { recipe_id: 1, ingredient: 'Salt to taste' },



      ]);
    });
};