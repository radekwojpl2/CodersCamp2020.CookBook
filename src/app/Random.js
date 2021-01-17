import { MainMenu } from './MainMenu.js';

MainMenu();

const recipe = document.querySelector("#recipiesRandom");
const navigationButton = document.querySelector('.navigationBtn')

const apiKey = 'fa79327224724e9da0b733fdcc9720d4';
let sInt;
let id;

export function toggleMenuOpened() {
    document.querySelector("#contentRandom").classList.toggle("menuOpened");
}

function getRandomRecipes() {

    recipe.replaceChildren();

    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ups...  Something went wrong!');
            }
            return response.json()
        })
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

        })
        .catch(error => {
            recipe.innerHTML = `<p>${error}</p>`;
            console.log(error)
        });

}


function getRandomRecipesClicked() {
    let btnRandomInt = document.getElementById("randomIntervalBtn");

    if (btnRandomInt.textContent.trim() === 'Stop show random in interval') {
        replace();
        clearInterval(sInt);
        clearInterval(id);
        let elem = document.getElementById("myAnimation");
        elem.style.left = 0;
    }
    getRandomRecipes();
}

export function replace() {
    let btnRandomInt = document.getElementById("randomIntervalBtn");
    let doreplace = 'Start show random in interval';
    let replaced = 'Stop show random in interval';
    let stop = btnRandomInt.innerHTML.replace(doreplace, replaced);
    let start = btnRandomInt.innerHTML.replace(replaced, doreplace);
    if (btnRandomInt.textContent.trim() === 'Start show random in interval') {
        btnRandomInt.innerHTML = stop;
    } else {
        btnRandomInt.innerHTML = start;
    }
}

function getRandomRecipesInterval() {
    let btnRandomInt = document.getElementById("randomIntervalBtn");

    if (btnRandomInt.textContent.trim() === 'Start show random in interval') {
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

export function doAnimation() {
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

// all code that changes / uses html elements moved to this function for easier testing
export function Random() {
    document.getElementById("recipiesRandom").style.background = "#ededed";
    navigationButton.addEventListener("click", toggleMenuOpened);

    document.getElementById("randomBtn").addEventListener("click", getRandomRecipesClicked);
    document.getElementById("randomIntervalBtn").addEventListener("click", getRandomRecipesInterval);
    window.addEventListener('beforeunload', function (closeWindow) {
        closeWindow.preventDefault();
        closeWindow.clearInterval(sInt);
        closeWindow.clearInterval(id);

    });
};