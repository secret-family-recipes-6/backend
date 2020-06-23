
exports.seed = function (knex) {
  return knex('instructions')
    .then(function () {
      return knex('instructions').insert([
        { recipe_id: 1, instruction: 'In a large frying pan, warm up the olive oil over medium heat. Cook the bacon, frequently stirring, until it is crispy — about three to five minutes. Add the onion and garlic. Cook them until they are soft, about five minutes. Add the pepper and parsley and cook another minute.' },
        { recipe_id: 1, instruction: 'Meanwhile, cook the pasta according to the directions on the box. Cook the pasta al dente. When it’s done, remove 1 1/2 cups of the cooking liquid and set aside. Drain the remaining liquid.' },
        { recipe_id: 1, instruction: 'Add the pasta to the frying pan along with 1/2 cup of the cooking liquid and 1/2 cup grated parmesan. Cook the pasta mixture until it is well-combined. Make sure the pasta is evenly coated.' },
        { recipe_id: 1, instruction: 'Remove the frying pan from the heat and add the egg yolks. Toss the pasta mixture with the egg yolks until a smooth sauce evenly covers the pasta. Add more of the liquid if you need it.' },
        { recipe_id: 1, instruction: 'Add the grated lemon zest, lemon juice, salt, and remaining grated parmesan.Toss the pasta again to coat it evenly.If the sauce is too thick, add more of the cooking liquid to loosen it up a little.' },
        { recipe_id: 1, instruction: 'Divide the pasta among four bowls.Top each serving with more parmesan and lemon zest if desired.' },
        { recipe_id: 2, instruction: 'Alternate (in no specific order) chicken, sausage, peppers, onions, and pineapple on skewers (makes about 6 skewers).' },
        { recipe_id: 2, instruction: 'Brush with glaze and grill on medium-high heat, turning every 2-3 minutes (brushing with glaze each turn) until chicken is cooked through.' },
        { recipe_id: 2, instruction: 'Serve immediately.' },
        { recipe_id: 3, instruction: 'Place your graham crackers in a blender or food processor and blend until you have very fine crumbs with no larger pieces. You can also place the crackers in an airtight bag and use your hands or a rolling pin to crush them.' },
        { recipe_id: 3, instruction: 'Then, combine graham cracker crumbs, sugar, and melted butter. Stir until combined. Press into the bottom of a springform pan or pie plate. Place in the freezer until you are ready to fill it.' },
        { recipe_id: 3, instruction: 'In a large bowl, mix the cream cheese with a hand mixer or stand mixer until it is light and fluffy.  This is more easily achieved if your cream cheese is softened to room temperature.' },
        { recipe_id: 3, instruction: 'Add powdered sugar and granulated sugar. Mix until combined. Add sour cream, vanilla extract, and lemon juice. Mix until combined, making sure to scrape the bottom of the bowl.' },
        { recipe_id: 3, instruction: 'In a separate bowl, beat the whipping cream with a hand mixer or stand mixer until stiff peaks form.' },
        { recipe_id: 3, instruction: 'Gently fold the whipped cream mixture into the cream cheese mixture. DO NOT MIX WITH MIXER. You want to keep as much air in the whipped cream as possible. Use a spatula and scrape the bottom and edges until the mixture is combined. ' },
        { recipe_id: 3, instruction: 'Now, pour the filling into the crust and smooth the top. Chill in the fridge for 24 hours.' },
        { recipe_id: 3, instruction: 'Serve with fresh berries or a topping of your choice.' },
        { recipe_id: 4, instruction: 'Blend all ingredients together until smooth. ' },
        { recipe_id: 4, instruction: 'Pour into individual glasses for serving.' },


      ]);
    });
};

