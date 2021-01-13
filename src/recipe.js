import {MainMenu} from './app/MainMenu.js'; 
import {API} from './globalData.js';

//create navigation bar
MainMenu();

//function to get id from url
const getParams = () => {
    const param = window.location.href.slice(window.location.href.indexOf('?') +1).split('=');
    return {'id':param[1]}
}

const param = getParams();

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
fetch(API.getRecipeInformation(param.id))
.then(response => {
    if (response.ok) {
        return response.json()
    } 
    throw new Error ("Ups... We didn't receive any data for this recipe")
})
.then(recipe => {
    const data = recipe.results;

    //add title to page
    title.innerText = recipe.title;
    console.log(recipe)

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

    //add instruction to prepare dish
    instructionBox.innerHTML = recipe.instructions

    //add ingredients 
    for (let ingredient in recipe.extendedIngredients) {
        createElementAndAppendToParent('p', ingredientsBox ,recipe.extendedIngredients[ingredient].original)
    }

})
.catch(error => console.log(error))

