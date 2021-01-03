const recipe = document.querySelector("#recipiesRandom");

function getRandomRecipes() {
    recipe.replaceChildren();

    fetch('https://api.spoonacular.com/recipes/random?apiKey=fa79327224724e9da0b733fdcc9720d4')
        .then(response => response.json())
        .then(data => {
            const img = document.createElement("img");
            img.setAttribute("src", data.recipes[0].image);
            recipe.appendChild(img);

            const ingeredients = document.createElement("div");

            function ingeredientsName() {
                let ingredientsArray = [];
                for (i = 0; i < data.recipes[0].extendedIngredients.length; i++) {

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

document.getElementById("random").onclick = getRandomRecipes;