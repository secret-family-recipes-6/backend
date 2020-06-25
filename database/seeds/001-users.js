exports.seed = function (knex) {
  // only insert, cleanup.js is in charge of truncating the tables
  // trucating means deleting all records and resetting the primary key
  return knex("users").insert([
    { first_name: "Guillermo", last_name: "Alfaro", username: "guillermo", password: "$2y$08$9HTxMOCVXrfVvvHrzd7xvOR3M0nuEbE0ZDUJ3B9S3ID7dCmw.TMce", email: "guillermo@secretfamilyrecipes.com" },
    { first_name: "Barbara", last_name: "Moore", username: "barbara", password: "$2y$08$U7RoDyLpZM56DcvnsFGDxOdfGjYiJndPzqvMNRYl3OhlD3n6tJ7Gq", email: "barbara@secretfamilyrecipes.com" },
    { first_name: "Jane", last_name: "Bailey", username: "jane", password: "$2y$08$1eulsEoKAI1jsPsvqRZb3ODBg1BhSRQhB8L1JryZfccxvxkx6Zyvu", email: "jane@secretfamilyrecipes.com" },
    { first_name: "Noah", last_name: "Green", username: "noah", password: "$2y$08$Hh77s5CpY3Pg5Y2bO4h9v.ZJmWWej3bOGB04667sm5k/ACSQaQeae", email: "noah@secretfamilyrecipes.com" },
    { first_name: "Elijah", last_name: "Paminsan", username: "elijah", password: "$2y$08$VVYm8STSoIlzn8N/U3t/DeqMbAAyNXgbO6uaq7kETAzP2JyA/fvtO", email: "elijah@secretfamilyrecipes.com" },
  ]);
};