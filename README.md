# backend


## Endpoints


## USERS

| Action               | URL                      | Method | Response            |
| :------------------- | :----------------        | :----- | :---------------    |
| Register new user    | /auth/register           | POST   | new user            |
| Login with user      | /auth/login              | POST   | user with Token     |
| View All Users       | /users                   | GET    | List of all users   |
| View User by Id      | /users/:id               | GET    | view specific user  |


## RECIPES
| Action               | URL                      | Method | Response             |
| :------------------- | :----------------        | :----- | :---------------     |
| View All Recipes     | /recipes                 | GET    | List of recipes      |
| View Recipe by Id    | /recipes/:id             | GET    | view specific recipe |
| from a given user    | /recipes/user/:id        | GET    | all recipes from user|                                                             
| Add Recipe           | /recipes                 | POST   | added recipe         |
| Edit Recipe          | /recipes/:id             | PUT    | updated recipe       |
| Delete Recipe        | /recipes/:id             | DELETE | deleted Recipe       |




A user has:

- a unique `id` - Not needed, creates by itself and auto increments

- username (required)
- password (required)
- email (required)

A recipe has:

- a unique `id` - Not needed, creates by itself and auto increments
- title - 
- source
- category 
- recipe_img
- ingredients
- instructions



