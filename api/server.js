const express = require('express');
const server = express();
const helmet = require('helmet');
const recipeRouter = require('../routers/recipes-router.js');
const userRouter = require('../routers/users-router.js');
const ingredientRouter = require('../routers/ingredients-router.js');
const instructionRouter = require('../routers/instructions-router.js');
const auth = require('../auth/auth-middleware.js');
const authRouter = require('../auth/auth-router.js');

server.use(helmet());
server.use(express.json());


server.use('/auth', authRouter);
server.use('/users', userRouter);
server.use('/ingredients', ingredientRouter);
server.use('/instructions', instructionRouter);
server.use('/recipes', auth, recipeRouter);


server.get('/', (req, res) => {
    const message = process.env.MESSAGE || 'Secret Family Recipes API'
    res.json({ message });
});

module.exports = server;