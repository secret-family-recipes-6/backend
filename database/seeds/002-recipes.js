
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
            "'1 tablespoon olive oil', '6 or 7 slices of bacon, cut into 1/2-inch pieces', '1 small yellow onion, chopped into tiny pieces,'5 cloves of garlic, cut into thin slices', '1 teaspoon black pepper', '1 1/2 teaspoon parsley', '10-12 ounces pasta (linguine, fettuccine, or spaghetti)','1 cup grated parmesan plus more as needed','2 egg yolks','The grated zest and juice of 1 lemon','Salt to taste'"

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











        // {
        //   title: 'Family Creamy Bacon Carbonara Recipe',
        //   user_id: 1,
        //   source: 'Mother',
        //   category: 'Pasta',
        //   recipe_img: 'https://www.saudereggs.com/content/uploads/2018/06/creamy-bacon-carbonara.jpg',


        // },

        // {
        //   title: 'Sweet and Spicy Chicken Kabobs',
        //   user_id: 1,
        //   source: 'Uncle',
        //   category: 'Grill',
        //   recipe_img: 'https://www.favfamilyrecipes.com/wp-content/uploads/2018/09/Grilled-Honey-Berry-Sriracha-Skewers-300x300.jpg'
        // },
        // {
        //   title: 'No Bake Cheesecake',
        //   user_id: 2,
        //   source: 'Brother',
        //   category: 'Dessert',
        //   recipe_img: 'https://www.favfamilyrecipes.com/wp-content/uploads/2020/06/No-Bake-Cheesecake-Bright-2.jpg'
        // },
        // {
        //   title: 'Tropical Banana Smoothie',
        //   user_id: 2,
        //   source: 'Sister',
        //   category: 'Breakfast',
        //   recipe_img: 'https://www.favfamilyrecipes.com/wp-content/uploads/2018/09/Orange-Pineapple-Banana-Smoothie.jpg'
        // },
      ]);
    });
};