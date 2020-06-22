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
| View Specific Recipe | /recipes/:id/ingredients | GET      specific recipe      |                                                         
| ingredients          |                          |        | ingredients          |
| View Specific Recipe | /recipes/:id/instructions| GET    | View specific recipe |                                                         
| instructions         |                          |        | instructions         |
| Add Recipe           | /recipes                 | POST   | added recipe         |
| Edit Recipe          | /recipes/:id             | PUT    | updated recipe       |
| Delete Recipe        | /recipes/:id             | DELETE | deleted Recipe       |


## INGREDIENTS

| Action               | URL              | Method | Response                |
| :------------------- | :----------------| :----- | :---------------        |
| View All Ingredients | /ingredients     | GET    | array of ingredients    |
| View Ingredient by Id| /ingredients/:id | GET    | view specific ingredient|
| Add Ingredient       | /ingredients     | POST   | added ingredients       |
| Edit Ingredient      | /ingredients/:id | PUT    | updated ingredients     |
| Delete Ingredient    | /ingredients/:id | DELETE | deleted ingredients     |


## INSTRUCTIONS

| Action                 | URL               | Method | Response                 |
| :-------------------   | :---------------- | :----- | :---------------         |
| View All Instructions  | /instructions     | GET    | array of instructions    |
| View Instruction by Id | /instructions/:id | GET    | view specific instruction|
| Add Instructions       | /instructions     | POST   | added instruction        |
| Edit Instructions      | /instructions/:id | PUT    | updated instruction      |
| Delete Instructions    | /instructions/:id | DELETE | delete instruction       |




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

ingredients have:

- a unique `id` - Not needed, creates by itself and auto increments
- ingredient

Instructions have: 

- a unique `id` - Not needed, creates by itself and auto increments
- instruction


