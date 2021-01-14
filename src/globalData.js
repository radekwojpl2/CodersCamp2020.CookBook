export const API = {
    getRecipeInformation: (id, api) => `https://api.spoonacular.com/recipes/${id}/information?apiKey=${api}`,
    searchFor: (value, api) => `https://api.spoonacular.com/recipes/complexSearch?query=${value}&apiKey=${api}`,
}

export const MENU = {
    mainPage: {name: 'Main Page', link: '/testPage.html'},
    randomRecipe: {name: 'Random Recipe', link: ''},
    nutritionGame: {name: 'Nutrition Game', link: ''},
    calculator: {name: 'Calculator', link: ''},
    shoppingList: {name: 'Shopping List', link: ''}
  }