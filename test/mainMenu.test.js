import {appendChildrenToElement, createElementWithClasses, createElementWithInnerText, createNavigationList, MainMenu} from '../src/app/MainMenu';
import {MENU} from '../src/GlobalData.js';

describe('Test for global functions in Main Menu ', () => {
    describe('appendChildrenToElement function', () => {
        const parentElement = document.createElement('div');
        const spanElement = document.createElement('span');
        const pElement = document.createElement('p');

        it('does not modify parent if no DOM elements are given', () => {
            appendChildrenToElement(parentElement);

            expect(parentElement.children.length).toEqual(0)
        });

        it('appends span and p elements to the given DOM element', () => {
            appendChildrenToElement(parentElement, spanElement, pElement);

            expect(parentElement.children.length).toEqual(2)
            expect(parentElement.children[0]).toEqual(spanElement)
            expect(parentElement.children[1]).toEqual(pElement)
        })
    });

    describe('createElementWithClasses function', () => {
        it('returns a DOM element with classes and return it', () => {
            const domElement = createElementWithClasses('div', 'class1', 'class2');
            
            expect(domElement.classList.length).toEqual(2);
            expect(domElement.classList[0]).toEqual('class1');
            expect(domElement.classList[1]).toEqual('class2');
            expect(domElement.tagName.toLowerCase()).toEqual('div');
        });
    });

    describe('createElementWithInnerText function', () => {
        it('create DOM element with inner text', () => {
            const domElement = createElementWithInnerText('div', 'Hello World!');

            expect(domElement.tagName.toLowerCase()).toEqual('div');
            expect(domElement.innerText).toEqual('Hello World!')
        });
        it('create DOM element with inner text and two classes using createElementWithClasses function', () => {
            const domElement = createElementWithInnerText('p', 'hello world', 'class1', 'class2');

            expect(domElement.tagName.toLowerCase()).toEqual('p');
            expect(domElement.innerText).toEqual('hello world');
            expect(domElement.classList.length).toEqual(2);
            expect(domElement.classList[0]).toEqual('class1');
            expect(domElement.classList[1]).toEqual('class2');
        })
    });
    describe('createNavigationList function', () => {
        const returnValueForMock = document.createElement('ul');
        returnValueForMock.classList.add('navigationList');
        const mockCallback = jest.fn().mockReturnValueOnce(returnValueForMock);

        it('should return list without Main Page in menu', () => {
            const navList = createNavigationList(MENU.mainPage);
            expect(navList.children.length).toEqual(4);
            for (let child in navList.children) {
                expect(child.innerText).not.toEqual(MENU.mainPage.name)
            }
        });
        it('should return list with 5 elements', () => {
            const navList = createNavigationList();
            expect(navList.children.length).toEqual(5);
        })
    })
});


