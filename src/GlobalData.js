export const API = {
    getRecipeInformation: (id, api) => `https://api.spoonacular.com/recipes/${id}/information?apiKey=${api}`,
    searchFor: (value, api) => `https://api.spoonacular.com/recipes/complexSearch?query=${value}&number=9&apiKey=${api}`,
}

export const MENU = {
    mainPage: {name: 'Main Page', link: '/index.html'},
    randomRecipe: {name: 'Random Recipe', link: '/random.html'},
    nutritionGame: {name: 'Nutrition Game', link: '/nutritionGame.html'},
    calculator: {name: 'Calculator', link: '/calculator.html'},
    shoppingList: {name: 'Shopping List', link: '/list.html'}
  }