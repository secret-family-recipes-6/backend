
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

      ]);
    });
};



