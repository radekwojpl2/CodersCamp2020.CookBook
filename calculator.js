const apiKey = '7c1cea1c1c664db5a38edbf2dd21484e';
const outputDiv = document.querySelector('.calculator__form__output');
const calculateButton = document.querySelector('.calculator__form__calculate');
const clearButton = document.querySelector('.calculator__form__clear');
const fromSelect = document.querySelector('.calculator__form__from');
const toSelect = document.querySelector('.calculator__form__to');
let fromSelectValue = fromSelect.value;
let toSelectValue = toSelect.value;

function calculate(sourceAmount, sourceUnit, targetUnit, outputDiv) {
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
fromSelect.addEventListener('change', (event) => {
    fromSelectValue = event.target.value;
})
toSelect.addEventListener('change', (event) => {
    toSelectValue = event.target.value;
})
calculateButton.addEventListener('click', () => {
    let sourceValue = parseFloat(document.querySelector('.calculator__form__input').value);
    calculate(sourceValue, fromSelectValue, toSelectValue, outputDiv);
});
clearButton.addEventListener('click', () => {
    outputDiv.innerHTML = 'answer goes here';
})
