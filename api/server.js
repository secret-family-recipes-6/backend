const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors')
const recipeRouter = require('../routers/recipes-router.js');
const userRouter = require('../routers/users-router.js');
const auth = require('../auth/auth-middleware.js');
const authRouter = require('../auth/auth-router.js');


server.use(cors());
server.use(helmet());
server.use(express.json());


server.use('/auth', authRouter);
server.use('/users', userRouter);
server.use('/recipes', auth, recipeRouter);


server.get('/', (req, res) => {
    const message = process.env.MESSAGE || 'Secret Family Recipes API'
    res.json({ message });
});

module.exports = server;