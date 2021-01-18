export async function calculate(sourceAmount, sourceUnit, targetUnit, apiKey) {
    if (isNaN(sourceAmount)) {
        return 'Please enter the correct number';
    } else {
        const response = await fetch(`https://api.spoonacular.com/recipes/convert?ingredientName=this&sourceAmount=${sourceAmount}&sourceUnit=${sourceUnit}&targetUnit=${targetUnit}&apiKey=${apiKey}`)
        const responseJSON = await response.json();
        const responseAnswer = await responseJSON.answer;
        return responseAnswer;
    }
}
