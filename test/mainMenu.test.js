import {appendChildrenToElement, createElementWithClasses, MainMenu} from '../src/app/MainMenu';


describe('Test for global functions in Main Menu ', () => {
    describe('Test function to append children to parent', () => {
        const parentElement = {appendChild: jest.fn()}
        it('Expect to append h1 and p to parentElement', () => {
            appendChildrenToElement(parentElement, 'h1', 'p');
            expect(parentElement.appendChild).toBeCalledTimes(2)
            expect(parentElement.appendChild).toBeCalledWith('h1');
            expect(parentElement.appendChild).toBeCalledWith('p');
        })
    });
    describe('Test function to create DOM element with classes', () => {
        const newElement = {classList: {add: jest.fn()}};
        const createElementSpy = jest.spyOn(document, 'createElement').mockReturnValueOnce(newElement);
        it('Should create element div with two classes: add and addExtra', () => {
            createElementWithClasses('div', 'add', 'addExtra');
            expect(createElementSpy).toBeCalledWith('div');
            expect(newElement.classList.add).toBeCalledTimes(1)
            expect(newElement.classList.add).toBeCalledWith('add', 'addExtra');
        })
    })
});

describe('Test for MainMenu', () => {

})

