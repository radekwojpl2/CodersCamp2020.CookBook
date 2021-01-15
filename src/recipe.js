import {MainMenu} from './app/MainMenu.js'; 
import {API} from './GlobalData.js';

const API_KEY = 'a69c65ede3bb4ac3b262c5b425b4f835';

//create navigation bar
MainMenu();

//function to get id from url
const getParams = () => {
    const param = window.location.href.slice(window.location.href.indexOf('?') +1).split('=');
    return {'id':param[1]}
}

const param = getParams();
console.log(param)

//DOM elements 
const title = document.querySelector('h1');
const tagsBox = document.querySelector('#tags');
const img = document.querySelector('img');
const ingredientsBox = document.querySelector('#basicData div');
const instructionBox = document.querySelector('#instruction')
//tags to include on page if they exist in recipe
const tags = ["dairyFree", "glutenFree", "vegetarian", "vegan"];

const createElementAndAppendToParent = (element, parentElement, innerText) => {
    const tagElement = document.createElement(element);
    tagElement.innerText = innerText;
    parentElement.appendChild(tagElement)
}

//function to get data from spoon
fetch(API.getRecipeInformation(param.id, API_KEY))
.then(response => {
    if (response.ok) {
        return response.json()
    } 
    throw new Error ("Ups... We didn't receive any data for this recipe")
})
.then(recipe => {
    //add title to page
    title.innerText = recipe.title;
    console.log(recipe.title)

    //add tags basing on dish type
    for (let tag of recipe.dishTypes) {
        createElementAndAppendToParent('span', tagsBox, tag)
    }

    //add tags basing on atributes of dish
    for (let tag of tags) {
        if (recipe[tag]) {
            createElementAndAppendToParent('span', tagsBox, tag)
        }
    }
    //add img
    img.setAttribute('src', recipe.image);
    img.setAttribute('alt', 'Ups... Something went wrong.')

    //add instruction to prepare dish
    instructionBox.innerHTML = '<h2>Instructions:</h2>' + recipe.instructions

    //add ingredients 
    ingredientsBox.innerHTML = '<h2>Ingredients:</h2>'
    for (let ingredient in recipe.extendedIngredients) {
        createElementAndAppendToParent('p', ingredientsBox ,recipe.extendedIngredients[ingredient].original)
    }

})
.catch(error => title.innerText = error)

