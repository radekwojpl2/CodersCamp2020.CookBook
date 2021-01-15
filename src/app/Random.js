import {MainMenu} from './MainMenu.js';

MainMenu();

document.getElementById("recipiesRandom").style.background = "#e7e7e7";
const recipe = document.querySelector("#recipiesRandom");
const navigationButton = document.querySelector('.navigationBtn')


navigationButton.addEventListener("click", toggleMenuOpened);



function toggleMenuOpened() {
    document.querySelector("#contentRandom").classList.toggle("menuOpened");
}


const apiKey = 'fa79327224724e9da0b733fdcc9720d4';
function getRandomRecipes() {

    recipe.replaceChildren();

    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log('Data from API:', data);
            const img = document.createElement("img");
            img.setAttribute("src", data.recipes[0].image);
            recipe.appendChild(img);

            const ingeredients = document.createElement("div");

            function ingeredientsName() {

                let ingredientsArray = [];
                for (let i = 0; i < data.recipes[0].extendedIngredients.length; i++) {

                    ingredientsArray.push(data.recipes[0].extendedIngredients[i].name);

                }
                return ingredientsArray;
            }

            ingeredients.innerHTML = ` <h4>Ingerdients:</h4> ${ingeredientsName()}`;
            recipe.appendChild(ingeredients);

            const instructions = document.createElement("div");
            instructions.innerHTML = ` <h3>Instruction:</h3> ${data.recipes[0].instructions}`;

            recipe.appendChild(instructions);

        });

}


function getRandomRecipesClicked() {
    if (btnRandomInt.innerText === 'Stop show random in interval') {
        replace();
        clearInterval(sInt);
        clearInterval(id);
        let elem = document.getElementById("myAnimation");
        elem.style.left = 0;
    }
    getRandomRecipes();
}
function replace() {
    let doreplace = 'Start show random in interval';
    let replaced = 'Stop show random in interval';

    let stop = btnRandomInt.innerHTML.replace(doreplace, replaced);
    let start = btnRandomInt.innerHTML.replace(replaced, doreplace);
    if (btnRandomInt.innerText === 'Start show random in interval') {
        btnRandomInt.innerHTML = stop;
    } else {
        btnRandomInt.innerHTML = start;
    }
}

let btnRandomInt = document.getElementById("randomIntervalBtn");

let sInt;
function getRandomRecipesInterval() {


    if (btnRandomInt.innerText === 'Start show random in interval') {
        replace();
        getRandomRecipes();
        doAnimation();
        sInt = setInterval(() => {
            getRandomRecipes();
            doAnimation();
        }, 10000);

    } else {
        replace();
        clearInterval(sInt);
        clearInterval(id);
        let elem = document.getElementById("myAnimation");
        elem.style.left = 0;
    }
}
let id;

function doAnimation() {
    let elem = document.getElementById("myAnimation");
    let position = 0;
    id = setInterval(frame, 50);
    function frame() {
        if (position == 99) {
            clearInterval(id);
        } else {
            position += 0.5;
            elem.style.left = position + '%';
        }
    }

}


document.getElementById("randomBtn").addEventListener("click", getRandomRecipesClicked);
document.getElementById("randomIntervalBtn").addEventListener("click", getRandomRecipesInterval);
window.addEventListener('beforeunload', function (closeWindow) {
    closeWindow.preventDefault();
    closeWindow.clearInterval(sInt);
    closeWindow.clearInterval(id);

});
; 