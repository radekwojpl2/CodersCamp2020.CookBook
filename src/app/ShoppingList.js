function getDishName(dishName) {
    fetch(`https://api.spoonacular.com/recipes/autocomplete?number=3&query=${dishName}&apiKey=6c277b159b164fb98a15d47c81519fd4`)
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
let res = [];

function getProducts(id){
fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=6c277b159b164fb98a15d47c81519fd4`)
        .then(response => response.json())
        .then(data => {
            console.log(data);  
            let output = ``;

            data.ingredients.forEach(element => {
                output += `<li>${element.name} <button><i class="fa fa-plus-circle"></i></button></li>`; 
            });
            document.querySelector('.ingredients').innerHTML = output;

            const arrayIngredients = document.querySelectorAll('.ingredients li');
            const arrayIngredientsBtn = document.querySelectorAll('.ingredients li button');
            console.log(arrayIngredients);
            
            let temp=1;
            arrayIngredients.forEach((e) =>{
                e.children[0].addEventListener('click', function(){
                    res.push(`<li class='ingredients ingredient${temp}'>${e.textContent} <button><i class="fa fa-times-circle"></i></button></li>`);
                    temp++;
                    document.querySelector('.shoppinglist').innerHTML = res.join("</li>");

                    const removeIngredients = document.querySelectorAll('.shoppinglist');
                    const removeIngredientsArray = Array.from(removeIngredients);
                    const arr = Array.prototype.slice.call( removeIngredientsArray[0].children );

                    clearSingleIngedient(res, arr);
                    clearShoppingList();
                })
            })
        });      
}

function clearSingleIngedient(arr1, arr2) {
    arr2.forEach((el) => {
        el.addEventListener('click', function () {
            const index = arr2.indexOf(el);
            arr2.splice(index, 1);
            arr1.splice(index, 1);
            let newOutput = "";
            arr2.forEach((element) => {
                newOutput += element.outerHTML;
            })
            document.querySelector('.shoppinglist').innerHTML = newOutput;
            clearSingleIngedient(arr1, arr2)
        })
    })
}

function clearShoppingList(){
    document.querySelector('h3 button').addEventListener('click', function() {
        document.querySelector('.shoppinglist').innerHTML = "";
        res=[];
    })
}