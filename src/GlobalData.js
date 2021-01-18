export const API = {
    getRecipeInformation: (id, api) => `https://api.spoonacular.com/recipes/${id}/information?apiKey=${api}`,
    searchFor: (value, api) => `https://api.spoonacular.com/recipes/complexSearch?query=${value}&number=9&apiKey=${api}`,
}

export const MENU = {
    mainPage: { name: 'Main Page', link: '/CodersCamp2020.CookBook/index.html' },
    randomRecipe: { name: 'Random Recipe', link: '/CodersCamp2020.CookBook/random.html' },
    nutritionGame: { name: 'Nutrition Game', link: '/CodersCamp2020.CookBook/nutritionGame.html' },
    calculator: { name: 'Calculator', link: '/CodersCamp2020.CookBook/calculator.html' },
    shoppingList: { name: 'Shopping List', link: '/CodersCamp2020.CookBook/list.html' }
}