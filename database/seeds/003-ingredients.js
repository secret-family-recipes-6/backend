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
        { recipe_id: 2, ingredient: '1 lb. chicken cut into 1" pieces' },
        { recipe_id: 2, ingredient: '1 lb. smoked sausage sliced' },
        { recipe_id: 2, ingredient: '1 red bell pepper cut into chunks' },
        { recipe_id: 2, ingredient: '1 red onion cut into chunks' },
        { recipe_id: 2, ingredient: '1 can pineapple chunks' },
        { recipe_id: 2, ingredient: 'For glaze: 1 c. Smuckers Fruit & Honey Triple Berry Spread' },
        { recipe_id: 2, ingredient: 'For glaze: 1/4 c. soy sauce' },
        { recipe_id: 2, ingredient: 'For glaze: 1/2 Tbsp. Sriracha or more to taste if you like it SPICY' },
        { recipe_id: 3, ingredient: '9 graham cracker sheets about one package' },
        { recipe_id: 3, ingredient: '1/3 cup sugar' },
        { recipe_id: 3, ingredient: '6 tablespoons butter melted' },
        { recipe_id: 3, ingredient: '16 ounces cream cheese softened to room temp' },
        { recipe_id: 3, ingredient: '1/2 cup powdered sugar' },
        { recipe_id: 3, ingredient: '1/2 cup granulated sugar' },
        { recipe_id: 3, ingredient: '1/3 cup sour cream' },
        { recipe_id: 3, ingredient: '2 teaspoons lemon juice' },
        { recipe_id: 3, ingredient: '1 teaspoon vanilla extract' },
        { recipe_id: 3, ingredient: '1 1/2 cups heavy whipping cream' },
        { recipe_id: 3, ingredient: 'toppings if desired' },
        { recipe_id: 4, ingredient: '2 cups frozen pineapple chunks' },
        { recipe_id: 4, ingredient: '3 medium oranges peeled' },
        { recipe_id: 4, ingredient: '2 very ripe bananas (frozen bananas work great)' },
        { recipe_id: 4, ingredient: '3/4 cup orange juice' },



      ]);
    });
};

