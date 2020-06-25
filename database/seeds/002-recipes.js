
exports.seed = function (knex) {
  return knex('recipes')
    .then(function () {
      return knex('recipes').insert([


        {
          title: 'Family Creamy Bacon Carbonara Recipe',
          user_id: 1,
          source: 'Mother',
          category: 'Pasta',
          recipe_img: 'https://www.saudereggs.com/content/uploads/2018/06/creamy-bacon-carbonara.jpg',
          ingredients:
            "'1 tablespoon olive oil, 6 or 7 slices of bacon, cut into 1/2-inch pieces, 1 small yellow onion, chopped into tiny pieces,5 cloves of garlic, cut into thin slices, 1 teaspoon black pepper, 1 1/2 teaspoon parsley, 10-12 ounces pasta (linguine, fettuccine, or spaghetti), 1 cup grated parmesan plus more as needed, 2 egg yolks,The grated zest and juice of 1 lemon,Salt to taste"
          ,
          instructions:
            "'In a large frying pan, warm up the olive oil over medium heat. Cook the bacon, frequently stirring, until it is crispy — about three to five minutes. Add the onion and garlic. Cook them until they are soft, about five minutes. Add the pepper and parsley and cook another minute.','Meanwhile, cook the pasta according to the directions on the box. Cook the pasta al dente. When it’s done, remove 1 1/2 cups of the cooking liquid and set aside. Drain the remaining liquid.', 'Add the pasta to the frying pan along with 1/2 cup of the cooking liquid and 1/2 cup grated parmesan. Cook the pasta mixture until it is well-combined. Make sure the pasta is evenly coated.','Remove the frying pan from the heat and add the egg yolks. Toss the pasta mixture with the egg yolks until a smooth sauce evenly covers the pasta. Add more of the liquid if you need it.','Add the grated lemon zest, lemon juice, salt, and remaining grated parmesan.Toss the pasta again to coat it evenly.If the sauce is too thick, add more of the cooking liquid to loosen it up a little.','Divide the pasta among four bowls.Top each serving with more parmesan and lemon zest if desired.'",
        },

        {
          title: 'Sweet and Spicy Chicken Kabobs',
          user_id: 2,
          source: 'Uncle',
          category: 'Grill',
          recipe_img: 'https://www.favfamilyrecipes.com/wp-content/uploads/2018/09/Grilled-Honey-Berry-Sriracha-Skewers-300x300.jpg',
          ingredients: "1 lb. chicken cut into 1 pieces', '1 lb. smoked sausage sliced', '1 red bell pepper cut into chunks', '1 red onion cut into chunks', '1 can pineapple chunks', 'For glaze: 1 c. Smuckers Fruit & Honey Triple Berry Spread','For glaze: 1/4 c. soy sauce', 'For glaze: 1/2 Tbsp. Sriracha or more to taste if you like it SPICY'",
          instructions:
            "'Alternate (in no specific order) chicken, sausage, peppers, onions, and pineapple on skewers (makes about 6 skewers).','Brush with glaze and grill on medium-high heat, turning every 2-3 minutes (brushing with glaze each turn) until chicken is cooked through.', 'Serve immediately.'"

        },

        {
          title: 'Southern-Style Egg Salad',
          user_id: 1,
          source: 'Walter',
          category: 'Sandwich',
          recipe_img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8100470.jpg',
          ingredients: '6 large eggs, 1/3 cup mayonnaise, 2 tsp mustard, 1 tsp sugar, 1 tsp lemon juice, 1/4 tsp salt, 1/4 tsp pepper, 3 dashes hot sauce',
          instructions: 'Cover eggs with water in a saucepan, bring to a low boil, let boil slowly for 5 minutes. Remove from heat and let stand, covered, for 5 minutes. Transfer eggs to ice water to chill for 5 minutes; peel. Grate eggs into a medium mixing bowl and add mayonnaise, relish, mustard, sugar, lemon juice, salt, pepper, and hot sauce. Mix well. Chill in the refrigerator for at least 30 minutes.',
        },
        {
          title: 'Honey Chicken Kabobs',
          user_id: 3,
          source: 'Ann Marie',
          category: 'Grill',
          recipe_img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1403054.jpg&w=596&h=596&c=sc&poi=face&q=85',
          ingredients: '1/4 cup vegetable oil, 1/3 cup honey, 1/3 cup soy sauce, 1/4 tsp pepper, 8 skinless, bonless chicken breast halves, 2 cloves garlic, 5 small onions, 2 red bell peppres',
          instructions: 'In a large bowl, whisk together oil, honey, soy sauce, and pepper. Before adding chicken, reserve a small amount of marinade to brush onto kabobs while cooking. Place the chicken, garlic, onions and peppers in the bowl, and marinate in the refrigerator at least 2 hours (the longer the better). Preheat the grill for high heat. Drain marinade from the chicken and vegetables, and discard marinade. Thread chicken and vegetables alternately onto the skewers. Lightly oil the grill grate. Place the skewers on the grill. Cook for 12 to 15 minutes, until chicken juices run clear. Turn and brush with reserved marinade frequently.',
        },
        {
          title: 'Pesto Grilled Cheese Sandwich',
          user_id: 4,
          source: 'Uncle Ray',
          category: 'Sandwich',
          recipe_img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4543319.jpg',
          ingredients: '2 slices of bread, 1 tbsp butter, 1 tbsp pesto, 2 slices provolone, 2 slices tomato',
          instructions: 'Spread one side of a slice of bread with butter, and place it, buttered side down, into a nonstick skillet over medium heat. Spread the top of the bread slice in the skillet with half the pesto sauce, and place a slice of provolone cheese, the tomato slices, and the slice of American cheese onto the pesto. Spread remaining pesto sauce on one side of the second slice of bread, and place the bread slice, pesto side down, onto the sandwich. Butter the top side of the sandwich. Gently fry the sandwich, flipping once, until both sides of the bread are golden brown and the cheese has melted, about 5 minutes per side.',
        },
        {
          title: 'Strawberry Oatmeal Breakfast Smoothie',
          user_id: 5,
          source: 'Phoebe',
          category: 'Breakfast',
          recipe_img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F959492.jpg&w=596&h=596&c=sc&poi=face&q=85',
          ingredients: '1 cup soy milk, 1/2 cup rolled oats, 1 banana, 14 frozen strawberries, 1/2 tsp vanilla extract, 1 1/2 tsp sugar',
          instructions: 'In a blender, combine soy milk, oats, banana and strawberries. Add vanilla and sugar if desired. Blend until smooth. Pour into glasses and serve.',
        },

        {
          title: 'Lemon-Ricotta Cornmeal Waffles',
          user_id: 2,
          source: 'Aunt Kim',
          category: 'Breakfast',
          recipe_img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6879705.jpg',
          ingredients: '1 cup flour, 1/2 cup cornmeal, 1/4 cup sugar, 1 1/2 tsp baking powder, 1/2 tsp baking soda, 1/4 tsp salt, 3/4 cup half-and-half, 1/2 cup ricotta cheese, 2 eggs, 2 tbsp melted butter, 1 tsp lemon extract',
          instructions: `Preheat a waffle iron according to manufacturer's instructions. Whisk flour, cornmeal, sugar, baking powder, baking soda, and salt together in a large mixing bowl. Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined. Coat the preheated waffle iron with cooking spray. Pour batter into waffle iron in batches and cook until crisp and golden brown and the iron stops steaming, about 5 minutes.`

        }

      ]);
    });
};