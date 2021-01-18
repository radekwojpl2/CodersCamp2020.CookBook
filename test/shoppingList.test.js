import { getProductsOutput, showLi} from '../src/app/ShoppingList';

describe('showLi function', () => {
    it('Check if li\'s elements are passed correctly', () => {
        expect(showLi("<li>hing</li>")).toEqual("<li>hing</li>");
    });
});


describe('getProductsOutput function', () => {
    it('Check if input dish name is correct', () => {
        expect(getProductsOutput('goto')).toEqual("goto");
    });
});
