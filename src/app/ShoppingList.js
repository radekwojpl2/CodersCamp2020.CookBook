import { MainMenu } from './MainMenu.js';
MainMenu();

function getDishName(dishName) {
    fetch(`https://api.spoonacular.com/recipes/autocomplete?number=3&query=${dishName}&apiKey=a9a22b5051244213b403d0913d67bf81`)
        .then(response => response.json())
        .then(data => {

            let output = ``;
            data.forEach(element => {
                output += ` <li><button data-id='${element.id}'>${element.title}</li>`; 
            });
            document.querySelector('.dish').innerHTML = output;
            
            document.querySelectorAll('.dish li button').forEach((e) => {
                e.addEventListener('click', function() {
                    console.log(e.textContent);

                    document.querySelector('#dishName').value=e.textContent;
                    let dataItem = e.getAttribute('data-id');
                    getProducts(dataItem);
                    document.querySelector('.dish').innerHTML = "";
                   
                })
            })
        });
}

document.querySelector('#dishName').addEventListener('keyup', function() {
    let inp = document.querySelector('#dishName');
    getDishName(inp.value);

});

let resultShoppingList = [];

function getProducts(id){
fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=a9a22b5051244213b403d0913d67bf81`)
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
                    resultShoppingList.push(`<li class='ingredients ingredient${temp}'>${ingredient.textContent} <button class="fa fa-times-circle"></button></li>`);
                    temp++;
                    document.querySelector('.shoppinglist').innerHTML = resultShoppingList.join("</li>");
                })
            })


            arrayIngredients.forEach((ingredient) =>{
                ingredient.children[0].addEventListener('click', function(){

                    const ingredientsDeleteButtons= document.querySelectorAll('.shoppinglist .ingredients button');
                    ingredientsDeleteButtons.forEach(ingredient=>{
                        ingredient.addEventListener('click', clearSingleIngredient);
                        
                    })

                    clearShoppingList();
                })
            })

            
        });      
}

function clearSingleIngredient(element) {
    element.target.parentElement.remove();
}

function clearShoppingList(){
    document.querySelector('h3 button').addEventListener('click', function() {
        document.querySelector('.shoppinglist').innerHTML = "";
        resultShoppingList=[];
    })
}