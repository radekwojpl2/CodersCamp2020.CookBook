//jest.mock('../calculate')

const { calculate } = require('../calculate');
const apiKey = '7c1cea1c1c664db5a38edbf2dd21484e';

test('xd', () => {
    calculate(5, 'teaspoon', 'ounce', apiKey).then(response => {
        expect(response).toBe('5 teaspoon translates to 0.87 ounce.');
    })

})