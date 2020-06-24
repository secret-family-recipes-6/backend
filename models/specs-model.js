

const registerUser = {

    first_name: "Guillermo",
    last_name: "Alfaro",
    username: "guillermo123",
    password: "123",
    email: "xxx@xxx.com"
}


const loginUser = {
    username: "guillermo123",
    password: "123",

}


const addRecipe = {
    title: 'Test recipe',
    user_id: 1,
    source: 'Mother',
    category: 'Pasta',
    recipe_img: 'test image',
    ingredients: 'test ingredients',
    instructions: 'test instructions'
}

const editRecipe = {
    title: 'Test recipe',
    user_id: 1,
    source: 'Father',
    category: 'Pasta',
    recipe_img: 'test image',
    ingredients: 'test ingredients',
    instructions: 'test instructions'
}


module.exports = {
    registerUser,
    loginUser,
    addRecipe,
    editRecipe

};