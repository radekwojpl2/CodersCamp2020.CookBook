import { createElementWithClass, createCardTitle, getIngredientsNames, createCardPhoto, clearElement, createCardIngredients } from '../src/app/HomePage';

describe('HomePage testing ', () => {
    it('should create new element with given classes', () => {
        const domElement = createElementWithClass('div', 'class-a', 'class-b');

        expect(domElement.tagName.toLowerCase()).toEqual('div');
        expect(domElement.classList.length).toEqual(2);
        expect(domElement.classList[0]).toEqual('class-a');
        expect(domElement.classList[1]).toEqual('class-b');

    });

    it('should create card title', () => {
        const parentElement = document.createElement('div');
        const title = createCardTitle('title', parentElement);

        expect(title.tagName.toLowerCase()).toEqual('div');
        expect(title.classList.length).toEqual(1)
        expect(title.classList[0]).toEqual('cardTitle')
        expect(title.innerHTML).toEqual('title')
        expect(parentElement.children[0]).toEqual(title)
    });

    it('should create card photo', () => {
        const parentElement = document.createElement('div');
        const photo = createCardPhoto("url", parentElement);

        expect(photo.tagName.toLowerCase()).toEqual('div');
        expect(photo.classList.length).toEqual(1);
        expect(photo.classList[0]).toEqual('cardPhoto');
        expect(parentElement.children[0]).toEqual(photo);
    });

    it('should clear element', () => {
        const element = document.createElement('div');
        clearElement(element);

        expect(element.innerHTML).toEqual("");

    });

    it('should create ingredient card', () => {
        const parentElement = document.createElement('div');
        createCardIngredients(["pizza", "pasta"], "Title", parentElement);

        const cardIngredient = parentElement.children[0];
        const listTitle = cardIngredient.children[0];
        const ul = cardIngredient.children[1];
        const ulChildren = ul.children;


        expect(cardIngredient.classList.length).toEqual(1);
        expect(cardIngredient.classList[0]).toEqual('cardIngredients');
        expect(listTitle.tagName.toLowerCase()).toEqual('h4');
        expect(listTitle.innerHTML).toEqual("Title");
        expect(ul.tagName.toLocaleLowerCase()).toEqual("ul");
        expect(ulChildren.length).toEqual(2);
        expect(ulChildren[0].innerHTML).toEqual("pizza");
        expect(ulChildren[0].tagName.toLocaleLowerCase()).toEqual("li");
        expect(ulChildren[1].innerHTML).toEqual("pasta");
        expect(ulChildren[1].tagName.toLocaleLowerCase()).toEqual("li");
    });

    it('Should do not create ingredient card if recipe ingredients are undefined', () => {
        const parentElement = document.createElement('div');
        createCardIngredients(undefined, "Title", parentElement)
        expect(parentElement.children.length).toEqual(0)
    });






















    //FIX ME
    // expect(photo.style.backgroundImage).toEqual(`url("url"), url(/static/assets/img/no_image_available.png)`);

    // expect(parentElement.children[0]).toEqual(photo);
});

// it('test', () => {
//     const mock = document.createElement("i");
//     mock.value = "pizza, pasta, tomato"
//     jest.mock('../src/app/HomePage', () => ({
//         ingredientsInput: mock
//     }))

//     const result = getInputValue()
//     expect(result).toEqual("pizza,pasta,tomato");
// });


describe('getIngredientsNames function', () => {
    const ingredients = [
        { name: "red onion" },
        { name: "italian dressing" },
        { name: "vanilla extract" },
        { name: "water" },
        { name: "tomato" },
        { name: "pork" }
    ]

    it('Should get ingredients names', () => {
        const result = getIngredientsNames(ingredients)

        expect(result.length).toEqual(5)
        expect(result[0]).toEqual("red onion")
        expect(result[1]).toEqual("italian dressing")
        expect(result[2]).toEqual("vanilla extract")
        expect(result[3]).toEqual("water")
        expect(result[4]).toEqual("tomato")
    });

    it('Should return undefined if ingredients param is undefined', () => {
        expect(getIngredientsNames(undefined)).toEqual(undefined)
    });
});