import { getProductsOutput, showLi} from '../src/app/ShoppingList';

describe('getDishNameOutput function', () => {
    it('Check if class is added on menuClick', () => {
        expect(showLi("<li>hing</li>")).toEqual("<li>hing</li>");
    });
});


describe('getProductsOutput function', () => {
    it('Check if class is added on menuClick', () => {
        expect(getProductsOutput('goto')).toEqual("goto");
    });
});
