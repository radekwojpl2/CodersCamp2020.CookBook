// 'use strict';
const API_KEY = 'f1d4678ea9644e0e856f7c3901def1a7'
const URL = 'https://api.spoonacular.com/recipes/findByIngredients';


function searchRecipesByIngredient() {
    fetch(URL + '?ingredients=' + getInputValue() + '&ranking&number=7&apiKey=' + API_KEY)
        .then(response => {
            return response.json()
                // return tempResponse;
        })
        .then(recipes => {
            document.getElementById("recipeSection").innerHTML = "";
            recipes.forEach(recipe => createRecipeCard(recipe))
        });
};

function createRecipeCard(recipe) {
    let newCardDiv = document.createElement("div");
    newCardDiv.setAttribute("class", "recipeCard");
    document.getElementById("recipeSection").appendChild(newCardDiv);
    createCardPhoto(recipe.image, newCardDiv);
    createCardTitle(recipe.title, newCardDiv);
    createCardIngredients(getIngredientsNames(recipe.missedIngredients), "Missed Ingredients: ", newCardDiv)
    createCardIngredients(getIngredientsNames(recipe.usedIngredients), "Used Ingredients: ", newCardDiv)
};

function getInputValue() {
    return document.getElementById("ingredient").value;
};

function createCardTitle(recipeTitle, parentElement) {
    let myTitle = document.createElement("div");
    myTitle.setAttribute("class", "cardTitle");
    myTitle.innerHTML = recipeTitle;
    parentElement.appendChild(myTitle);
}

function createCardPhoto(cardPhoto, parentElement) {
    let hyperLink = document.createElement("a");
    hyperLink.setAttribute("href", "/");
    hyperLink.setAttribute("class", "wrapper");
    let myPhoto = document.createElement("div");
    myPhoto.setAttribute("class", "cardPhoto");
    myPhoto.setAttribute("style", "background-image: url(" + cardPhoto + ")");
    hyperLink.appendChild(myPhoto);
    parentElement.appendChild(hyperLink);
}

function createCardIngredients(recipeIngredients, status, parentElement) {
    console.log(recipeIngredients)
    let myIngredients = document.createElement("div");
    myIngredients.setAttribute("class", "cardIngredients ");
    let ingredientsStatus = document.createElement("h4")
    ingredientsStatus.innerHTML = status;
    myIngredients.appendChild(ingredientsStatus)
    let ul = document.createElement("ul");
    myIngredients.appendChild(ul);

    recipeIngredients.forEach(i => {
        let li = document.createElement("li")
        li.innerHTML = i
        ul.appendChild(li)
    })

    parentElement.appendChild(myIngredients);
}

function getIngredientsNames(ingredients) {
    console.log(ingredients)
    let ingredientsList = [];
    ingredients.forEach(ingredient => {
        ingredientsList.push(ingredient.original);
    });

    return ingredientsList;
};