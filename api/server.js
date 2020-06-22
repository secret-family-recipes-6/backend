const express = require('express');
const server = express();
const helmet = require('helmet');
const recipeRouter = require('../routes/recipes-router.js');
const userRouter = require('../routes/users-router.js');
const ingredientRouter = require('../routes/ingredients-router.js');
const instructionRouter = require('../routes/instructions-router.js');
const auth = require('../auth/auth-middleware.js');

server.use(helmet());
server.use(express.json());
server.use(cors());
//server.use('/uploads', express.static('uploads'))
server.use('/users', userRouter);
server.use('/ingredients', ingredientRouter);
server.use('/instructions', instructionRouter);
server.use('/recipes', auth, recipeRouter);


server.get('/', (req, res) => {
    const message = process.env.MESSAGE || 'Secret Family Recipes API'
    res.json({ message });
});

module.exports = server;