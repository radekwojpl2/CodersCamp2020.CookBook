import { MainMenu } from './MainMenu.js';

MainMenu()
const { calculate } = require('./calculate')
const apiKey = '7c1cea1c1c664db5a38edbf2dd21484e';
const outputDiv = document.querySelector('.calculator__form__output');
const calculateButton = document.querySelector('.calculator__form__calculate');
const clearButton = document.querySelector('.calculator__form__clear');
const fromSelect = document.querySelector('.calculator__form__from');
const toSelect = document.querySelector('.calculator__form__to');
let fromSelectValue = fromSelect.value;
let toSelectValue = toSelect.value;

fromSelect.addEventListener('change', (event) => {
    fromSelectValue = event.target.value;
})
toSelect.addEventListener('change', (event) => {
    toSelectValue = event.target.value;
})
calculateButton.addEventListener('click', async () => {
    let sourceValue = parseFloat(document.querySelector('.calculator__form__input').value);
    try {
        const response = await calculate(sourceValue, fromSelectValue, toSelectValue, apiKey);
        outputDiv.innerHTML = response;
    } catch (event) {
        outputDiv.innerHTML = "Sorry, something went wrong";
        console.log(event);
    }
});
clearButton.addEventListener('click', () => {
    outputDiv.innerHTML = 'answer goes here';
})
