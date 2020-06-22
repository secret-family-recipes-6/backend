exports.seed = function (knex) {
  // only insert, cleanup.js is in charge of truncating the tables
  // trucating means deleting all records and resetting the primary key
  return knex("users").insert([
    { username: "guillermo", password: "123", email: "123@123.com" },
  ]);
};