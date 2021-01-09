function calculate() {
    const sourceAmount = parseInt(document.querySelector('.calculator__form__input').value);
    const sourceUnit = document.querySelector('.calculator__form__from').value;
    const targetUnit = document.querySelector('.calculator__form__to').value;
    const outputDiv = document.querySelector('.calculator__form__output');
    const apiKey = '7c1cea1c1c664db5a38edbf2dd21484e'

    fetch(`https://api.spoonacular.com/recipes/convert?ingredientName=this&sourceAmount=${sourceAmount}&sourceUnit=${sourceUnit}&targetUnit=${targetUnit}&apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => outputDiv.innerHTML = data.answer)
}

calcButton = document.querySelector('.calculator__form__button')
calcButton.addEventListener('click', calculate, false)

console.log('xd')
//7c1cea1c1c664db5a38edbf2dd21484e