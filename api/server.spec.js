const supertest = require('supertest');
const server = require('./server.js');
const database = require('../database/dbConfig.js')
const { registerUser, loginUser, addRecipe, editRecipe } = require('../models/specs-model.js')

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
        it("should create an account and return 201 status code", async () => {

            const response = await supertest(server)
                .post("/auth/register")
                .send(registerUser)
            expect(response.status).toBe(201)
        })

    })

    //UNAUTHORIZED WITHOUT TOKEN
    describe("POST to /auth/login", () => {
        it("Should be restricted without token", async () => {
            try {
                await supertest(server).post("/auth/login")
                    .send(loginUser)
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
                .send(registerUser)
            const loginResponse = await supertest(server)
                .post('/auth/login')
                .send(loginUser)

            const response = await supertest(server)
                .get('/recipes')

                .set({ Authorization: loginResponse.body.token })
            expect(response.status).toBe(200)


        })

    })

    //GETS ALL RECIPES FROM A SPECIFIC USER
    describe('GET /recipes/users/:id', () => {
        it('should return 200 success because token is passed', async () => {
            await supertest(server)
                .post('/auth/register')
                .send(registerUser)
            const loginResponse = await supertest(server)
                .post('/auth/login')
                .send(loginUser)

            const id = await loginResponse.body.id

            const response = await supertest(server)
                .get(`/recipes/users/${id}`)

                .set({ Authorization: loginResponse.body.token })
            expect(response.status).toBe(200)
        })
    })

    // ADDS A RECIPE
    describe('GET /recipes', () => {
        it('should return 201 success recipe added', async () => {

            await supertest(server)
                .post('/auth/register')
                .send(registerUser)

            const loginResponse = await supertest(server)
                .post('/auth/login')
                .send(loginUser)

            const addResponse = await supertest(server)
                .post('/recipes')
                .send(addRecipe)
                .set({ Authorization: loginResponse.body.token })
            expect(addResponse.status).toBe(201)

        })

    })



    // EDIT A RECIPE 
    describe('GET /recipes', () => {
        it('should return 200 success recipe updated', async () => {

            await supertest(server)
                .post('/auth/register')
                .send(registerUser)

            const loginResponse = await supertest(server)
                .post('/auth/login')
                .send(loginUser)

            const addResponse = await supertest(server)
                .post('/recipes')
                .send(addRecipe)

                .set({ Authorization: loginResponse.body.token })
            expect(addResponse.status).toBe(201)

            const id = await addResponse.body.id

            const editResponse = await supertest(server)
                .put(`/recipes/${id}`)
                .send(editRecipe)
                .set({ Authorization: loginResponse.body.token })
            expect(editResponse.status).toBe(200)
        })
    })

    //DELETE A RECIPE
    describe('DELETE /recipes', () => {
        it('should return success recipe deleted message', async () => {

            await supertest(server)
                .post('/auth/register')
                .send(registerUser)

            const loginResponse = await supertest(server)
                .post('/auth/login')
                .send(loginUser)

            const addResponse = await supertest(server)
                .post('/recipes')
                .send(addRecipe)

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



