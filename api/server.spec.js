const supertest = require('supertest');
const server = require('./server.js');
const Users = require('../models/users-model');
const Recipes = require('../models/recipes-model');
const database = require('../database/dbConfig.js')

beforeEach(async () => {
    await database('users').truncate();
    await database('recipes').truncate();
});



//TESTING ORIGINAL API ENDPOINT
describe('Test Auth endpoints ', () => {
    describe("GET to /", () => {

        it("can run the tests", () => {
            expect(true).toBeTruthy();
        });


        //TESTING STATUS CODE AND MESSAGE 
        it("returns status code", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200);
                    expect(res.body).toEqual({ message: "Secret Family Recipes API" })
                })
        });
    })


    ///SUCCESFUL REGISTRATION

    describe('POST to /auth/register', () => {
        it("should create an account and return 201 status code", () => {

            return supertest(server)
                .post("/auth/register")
                .send({

                    first_name: "Guillermo",
                    last_name: "Alfaro",
                    username: "guillermo123",
                    password: "123",
                    email: "xxx@xxx.com"

                })
                .set('Accept', 'application/json')
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })
    })


    //UNAUTHORIZED WITHOUT TOKEN

    describe("POST to /auth/login", () => {
        it("Should be restricted without token", async () => {
            try {
                await supertest(server).post("/auth/login")
                    .send({
                        username: "guillermo123",
                        password: "123",

                    })
                    .then(response => {
                        expect(response.status).toBe(401);

                    })

            } catch (error) {
                console.log(error);
            }
        })
    })



    //REGISTERS, LOGS IN, GETS TOKEN BACK, SEES RECIPES ROUTE(RESTRICTED WITHOUT TOKEN)

    describe('GET /recipes', () => {
        it('should return 200 success because token is passed', async () => {
            await supertest(server)
                .post('/auth/register')
                .send({
                    first_name: "Guillermo",
                    last_name: "Alfaro",
                    username: "guillermo123",
                    password: "123",
                    email: "xxx@xxx.com"

                })
            const loginResponse = await supertest(server)
                .post('/auth/login')
                .send({
                    username: "guillermo123",
                    password: "123",
                })

            const response = await supertest(server)
                .get('/recipes')

                .set({ Authorization: loginResponse.body.token })
            expect(response.status).toBe(200)


        })

    })


    // ADDS A RECIPE

    describe('GET /recipes', () => {
        it('should return 201 success recipe added', async () => {

            await supertest(server)
                .post('/auth/register')
                .send({
                    first_name: "Guillermo",
                    last_name: "Alfaro",
                    username: "guillermo321",
                    password: "123",
                    email: "321@321.com"

                })

            const loginResponse = await supertest(server)
                .post('/auth/login')
                .send({
                    username: "guillermo321",
                    password: "123",
                })

            const addResponse = await supertest(server)
                .post('/recipes')
                .send({
                    title: 'Test recipe',
                    user_id: 1,
                    source: 'Mother',
                    category: 'Pasta',
                    recipe_img: 'test image',
                    ingredients: 'test ingredients',
                    instructions: 'test instructions'
                })
                .set({ Authorization: loginResponse.body.token })
            expect(addResponse.status).toBe(201)

        })

    })



    // EDIT A RECIPE 

    describe('GET /recipes', () => {
        it('should return 200 success recipe updated', async () => {

            await supertest(server)
                .post('/auth/register')
                .send({
                    first_name: "Guillermo",
                    last_name: "Alfaro",
                    username: "guillermo432",
                    password: "123",
                    email: "432@432.com"

                })

            const loginResponse = await supertest(server)
                .post('/auth/login')
                .send({
                    username: "guillermo432",
                    password: "123",
                })



            const addResponse = await supertest(server)
                .post('/recipes')
                .send({
                    title: 'Test recipe',
                    user_id: 1,
                    source: 'Mother',
                    category: 'Pasta',
                    recipe_img: 'test image',
                    ingredients: 'test ingredients',
                    instructions: 'test instructions'
                })

                .set({ Authorization: loginResponse.body.token })
            expect(addResponse.status).toBe(201)

            const id = await addResponse.body.id

            const editResponse = await supertest(server)
                .put(`/recipes/${id}`)
                .send({
                    title: 'Test recipe',
                    user_id: 1,
                    source: 'Father',
                    category: 'Pasta',
                    recipe_img: 'test image',
                    ingredients: 'test ingredients',
                    instructions: 'test instructions'
                })
                .set({ Authorization: loginResponse.body.token })
            expect(editResponse.status).toBe(200)


        })

    })



    //DELETE A RECIPE


    describe('DELETE /recipes', () => {
        it('should return success recipe deleted message', async () => {

            await supertest(server)
                .post('/auth/register')
                .send({
                    first_name: "Guillermo",
                    last_name: "Alfaro",
                    username: "guillermo432",
                    password: "123",
                    email: "432@432.com"
                })

            const loginResponse = await supertest(server)
                .post('/auth/login')
                .send({
                    username: "guillermo432",
                    password: "123",
                })

            const addResponse = await supertest(server)
                .post('/recipes')
                .send({
                    title: 'Test recipe',
                    user_id: 1,
                    source: 'Mother',
                    category: 'Pasta',
                    recipe_img: 'test image',
                    ingredients: 'test ingredients',
                    instructions: 'test instructions'
                })

                .set({ Authorization: loginResponse.body.token })
            expect(addResponse.status).toBe(201)

            const id = await addResponse.body.id

            const deleteResponse = await supertest(server)
                .delete(`/recipes/${id}`)

                .set({ Authorization: loginResponse.body.token })
            expect(deleteResponse.body).toEqual({ removed: 'Recipe Deleted Sucessfully' })


        })

    })



})



