'use strict';
import { MainMenu } from './MainMenu.js';

const API_KEY = 'f1d4678ea9644e0e856f7c3901def1a7'
const URLSearchByIngredients = 'https://api.spoonacular.com/recipes/findByIngredients';
const URLRandomRecipes = 'https://api.spoonacular.com/recipes/random';

const tagsElement = document.getElementById("tags");
const recipeSection = document.getElementById("recipeSection");
const searchButton = document.getElementById("searchButton");
const ingredientsInput = document.getElementById("ingredient");
const tags = document.getElementById("tags");

MainMenu();


function getRecipesByIngredient(ingredients) {

    fetch(URLSearchByIngredients + '?ingredients=' + ingredients.replace(/,/g, ",+") + '&ranking&number=6&apiKey=' + API_KEY)
        .then(response => {
            return response.json()
        })
        .then(recipes => {
            clearElement(recipeSection)
            recipes.forEach(recipe => createRecipeCard(recipe))
        })
        .then(() => {
            createTagLabels(ingredients);
            ingredientsInput.value = "";
        })
}


export function clearElement(element) {
    console.log(element)
    element.innerHTML = "";
}

function getRandomRecipes() {
    fetch(URLRandomRecipes + '?number=6&apiKey=' + API_KEY)
        .then(response => {
            return response.json()
        })
        .then(recipesObject => {
            return recipesObject.recipes
        })
        .then(recipes => {
            recipes.forEach(recipe => createRecipeCard(recipe))
        })
};

function createTagLabels(ingredients) {
    if (ingredients) {
        clearElement(tagsElement);
        ingredients.split(",").forEach(i => {
            let tagLabel = createElementWithClass("div", "tagLabel");
            let timesIcon = createElementWithClass("i", "fa", "fa-times");
            tagLabel.innerHTML = i;
            tagLabel.appendChild(timesIcon);
            tagsElement.appendChild(tagLabel)
            tagLabel.addEventListener("click", function() {
                deleteTag(this)
            })
        })
    }
}

function deleteTag(element) {
    tags.removeChild(element);
    let otherParameters = [];
    document.querySelectorAll(".tagLabel").forEach(tag => {
        otherParameters.push(tag.innerText);
    })
    getRecipesByIngredient(otherParameters.toString());
};

function createRecipeCard(recipe) {
    let hyperLink = createElementWithClass("a", "wrapper");
    hyperLink.href = `/recipe.html?id=${recipe.id}`
    let recipeCard = createElementWithClass("div", "recipeCard");
    recipeCard.id = recipe.id;
    document.getElementById("recipeSection").appendChild(hyperLink);
    hyperLink.appendChild(recipeCard);
    createCardPhoto(recipe.image, recipeCard);
    createCardTitle(recipe.title, recipeCard);
    createCardIngredients(getIngredientsNames(recipe.missedIngredients), "Missed Ingredients: ", recipeCard)
    createCardIngredients(getIngredientsNames(recipe.usedIngredients), "Used Ingredients: ", recipeCard)
    createCardIngredients(getIngredientsNames(recipe.extendedIngredients), "Ingredients: ", recipeCard)
};

export const getInputValue = () => {
    return ingredientsInput.value.replace(/\s/g, "");
};

export function createCardTitle(recipeTitle, parentElement) {
    const title = createElementWithClass("div", "cardTitle");
    title.innerHTML = recipeTitle;
    parentElement.appendChild(title);
    return title;
}

export function createCardPhoto(photoPath, parentElement) {
    let photo = createElementWithClass("div", "cardPhoto");
    photo.setAttribute("style", `background-image: url("${photoPath}"), url(/static/assets/img/no_image_available.png)`);
    parentElement.appendChild(photo);
    return photo;
}

export function createCardIngredients(recipeIngredients, title, parentElement) {
    if (recipeIngredients !== undefined) {
        let ingredientsCard = createElementWithClass("div", "cardIngredients");
        let listTitle = document.createElement("h4")
        listTitle.innerHTML = title;
        ingredientsCard.appendChild(listTitle)
        let ul = document.createElement("ul");
        ingredientsCard.appendChild(ul);

        recipeIngredients.forEach(i => {
            let li = document.createElement("li")
            li.innerHTML = i
            ul.appendChild(li)
        })

        parentElement.appendChild(ingredientsCard);
    }
}

export function getIngredientsNames(ingredients) {
    if (ingredients !== undefined) {
        let ingredientsNames = []
        for (let i = 0; i < 5 && i < ingredients.length; i++) {
            ingredientsNames.push(ingredients[i].name);
        }
        return ingredientsNames;
    }
};

export function createElementWithClass(element, ...elementClass) {
    let newElement = document.createElement(element);
    newElement.classList.add(...elementClass);
    return newElement;
}

window.addEventListener('load', function() {
    getRandomRecipes();
    searchButton.addEventListener("click", function() {
        getRecipesByIngredient(getInputValue())
    });
})