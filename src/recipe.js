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

//function to get data from spoon
fetch(API.getRecipeInformation(param.id))
.then(response => {
    if (response.ok) {
        return response.json()
    } 
    throw new Error ("Ups... We didn't receive any data for this recipe")
})
.then(recipe => console.log(recipe))
.catch(error => console.log(error))

