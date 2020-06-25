exports.seed = function (knex) {
  // only insert, cleanup.js is in charge of truncating the tables
  // trucating means deleting all records and resetting the primary key
  return knex("users").insert([
    { first_name: "Guillermo", last_name: "Alfaro", username: "guillermo", password: "alfaro", email: "guillermo@secretfamilyrecipes.com" },
    { first_name: "Barbara", last_name: "Moore", username: "barbara", password: "moore", email: "barbara@secretfamilyrecipes.com" },
    { first_name: "Jane", last_name: "Bailey", username: "jane", password: "bailey", email: "jane@secretfamilyrecipes.com" },
    { first_name: "Noah", last_name: "Green", username: "noah", password: "green", email: "noah@secretfamilyrecipes.com" },
    { first_name: "Elijah", last_name: "Paminsan", username: "elijah", password: "paminsan", email: "elijah@secretfamilyrecipes.com" },
  ]);
};