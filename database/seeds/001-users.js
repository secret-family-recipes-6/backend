exports.seed = function (knex) {
  // only insert, cleanup.js is in charge of truncating the tables
  // trucating means deleting all records and resetting the primary key
  return knex("users").insert([
    { first_name: "Guillermo", last_name: "Alfaro", username: "guillermo255", password: "123", email: "123@123.com" },
    { first_name: "Barbara", last_name: "Moore", username: "Barbara123", password: "12345", email: "xyz@xyz.com" },
  ]);
};