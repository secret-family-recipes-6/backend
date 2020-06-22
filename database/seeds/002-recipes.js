
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

      ]);
    });
};