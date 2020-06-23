
exports.seed = function (knex) {
  return knex('recipes')
    .then(function () {
      return knex('recipes').insert([
        {
          title: 'Family Creamy Bacon Carbonara Recipe',
          user_id: 1,
          source: 'Mother',
          category: 'Pasta',
          recipe_img: 'https://www.saudereggs.com/content/uploads/2018/06/creamy-bacon-carbonara.jpg'
        },

        {
          title: 'Sweet and Spicy Chicken Kabobs',
          user_id: 1,
          source: 'Uncle',
          category: 'Grill',
          recipe_img: 'https://www.favfamilyrecipes.com/wp-content/uploads/2018/09/Grilled-Honey-Berry-Sriracha-Skewers-300x300.jpg'
        },
        {
          title: 'No Bake Cheesecake',
          user_id: 2,
          source: 'Brother',
          category: 'Dessert',
          recipe_img: 'https://www.favfamilyrecipes.com/wp-content/uploads/2020/06/No-Bake-Cheesecake-Bright-2.jpg'
        },
        {
          title: 'Tropical Banana Smoothie',
          user_id: 2,
          source: 'Sister',
          category: 'Breakfast',
          recipe_img: 'https://www.favfamilyrecipes.com/wp-content/uploads/2018/09/Orange-Pineapple-Banana-Smoothie.jpg'
        },
      ]);
    });
};