const outputDiv = document.querySelector('.calculator__form__output');
const apiKey = '7c1cea1c1c664db5a38edbf2dd21484e';

function calculate() {
    const sourceAmount = parseFloat(document.querySelector('.calculator__form__input').value);
    const sourceUnit = document.querySelector('.calculator__form__from').value;
    const targetUnit = document.querySelector('.calculator__form__to').value;

    if (isNaN(sourceAmount)) {
        outputDiv.innerHTML = 'Please enter the correct number';
    } else {
        fetch(`https://api.spoonacular.com/recipes/convert?ingredientName=this&sourceAmount=${sourceAmount}&sourceUnit=${sourceUnit}&targetUnit=${targetUnit}&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                data.answer !== undefined ?
                    outputDiv.innerHTML = data.answer :
                    outputDiv.innerHTML = 'Sorry, something went wrong, please try again'
            })
            .catch(() => {
                outputDiv.innerHTML = 'Sorry, something went wrong, please try again';
            })
    }
}

const calcButton = document.querySelector('.calculator__form__calculate');
const clearButton = document.querySelector('.calculator__form__clear');
calcButton.addEventListener('click', calculate, false);
clearButton.addEventListener('click', () => {
    outputDiv.innerHTML = 'answer goes here';
})

console.log('xd')
//7c1cea1c1c664db5a38edbf2dd21484e