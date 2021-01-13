export const API_KEY = 'a69c65ede3bb4ac3b262c5b425b4f835';

export const API = {
    getRecipeInformation: (id) => `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`,
    searchFor: (value) => `https://api.spoonacular.com/recipes/complexSearch?query=${value}&apiKey=${API_KEY}`,
}