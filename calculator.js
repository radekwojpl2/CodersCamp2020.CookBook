function calculate() {
    const inputNumber = parseInt(document.querySelector('.calculator__form__input').value);
    const outputNumber = document.querySelector('.calculator__form__output')

    outputNumber.innerHTML = inputNumber;
}

calcButton = document.querySelector('.calculator__form__button')
calcButton.addEventListener('click', calculate, false)

console.log('xd')
//7c1cea1c1c664db5a38edbf2dd21484e