import { MainMenu } from '../app/MainMenu.js';
import { MENU } from '../GlobalData.js'

MainMenu(MENU.shoppingList);
window.onload = inputDishName;


function getDishName(dishName) {
    fetch(`https://api.spoonacular.com/recipes/autocomplete?number=3&query=${dishName}&apiKey=82b93f78e7ca49cfa0aed375729b37ce`)
        .then(response => response.json())
        .then(data => {
            let output = ``;
            data.forEach(element => {
                output += ` <li><button data-id='${element.id}'>${element.title}</li>`; 
            });
            document.querySelector('.dish').innerHTML = output;         
            
            document.querySelectorAll('.dish li button').forEach((e) => {
                e.addEventListener('click', function() {

                    document.querySelector('#dishName').value=e.textContent;
                    let dataItem = e.getAttribute('data-id');
                    getProducts(dataItem, e.textContent);
                    document.querySelector('.dish').innerHTML = "";
                   
                })
            })
        });
}

function inputDishName() {
    document.querySelector('#dishName').addEventListener('keyup', function() {
        let inp = document.querySelector('#dishName');
        getDishName(inp.value);

    });
}

let resultShoppingList = [];


export function getProductsOutput(productName){
    return productName;
}

export function showLi(li) {
    return li;
}

function getProducts(id, productName){
fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=82b93f78e7ca49cfa0aed375729b37ce`)
        .then(response => response.json())
        .then(data => {
            let output = ``;
            data.ingredients.forEach(element => {
                output += `<li>${element.name} <button class="fa fa-plus-circle"></button></li>`; 
            });
            document.querySelector('.ingredients').innerHTML = output;

            const arrayIngredients = document.querySelectorAll('.ingredients li');
            console.log(arrayIngredients);
            
            let temp=1;

            arrayIngredients.forEach((ingredient) =>{
                ingredient.children[0].addEventListener('click', function(){
                  
                    const li= document.createElement("li");
                    li.classList.add("ingredients");
                    li.dataset.ingredient=temp;

                    const button= document.createElement("button");
                    button.classList.add('fa', 'fa-times-circle');

                    li.innerText=ingredient.textContent;
                    li.appendChild(button);
                    resultShoppingList.push(li);                   
                    temp++;

                    console.log("<li>hing</li>")

                    resultShoppingList.forEach((result)=>{
                        document.querySelector('.shoppinglist').appendChild(result);
                    })

                    const ingredientsDeleteButtons= document.querySelectorAll('.shoppinglist .ingredients button');
                    ingredientsDeleteButtons.forEach(ingredientsDelete=>{
                        ingredientsDelete.addEventListener('click', clearSingleIngredient);
                    })
                    
                    clearShoppingList();
                })
            })
   
        });      
}

function clearSingleIngredient(listElement) {
    
    listElement.target.parentElement.remove();

    resultShoppingList = resultShoppingList.filter((resultElement)=>{
        resultElement.dataset['ingredient'] !== listElement.target.parentElement.dataset['ingredient'];
    })
}

function clearShoppingList(){
    document.querySelector('h3 button').addEventListener('click', function() {
        document.querySelector('.shoppinglist').innerHTML = "";
        resultShoppingList=[];
    })
}