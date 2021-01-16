import { toggleMenuOpened, replace, doAnimation} from '../src/app/Random';






describe('toggleMenuOpened function', () => {
    it('Check if class is added on menuClick', () => {
        document.body.innerHTML =
            '<div id="contentRandom"> </div>';
        toggleMenuOpened();

        expect(document.body.innerHTML).toEqual('<div id="contentRandom" class="menuOpened"> </div>');
    });
});

describe('replace function', () => {
    it('Check if button text changes after running replace function', () => {
        document.body.innerHTML =
            '<button id="randomIntervalBtn">Start show random in interval</button>';
        replace();

        expect(document.body.innerHTML).toEqual('<button id="randomIntervalBtn">Stop show random in interval</button>');
    });
});

jest.useFakeTimers();
describe('doAnimation function', () => {
    
    
    it('Check if animation run after running getRandomRecipesInterval function', () => {
        document.body.innerHTML =
            '<div id ="myAnimation"></div>';
        doAnimation();
        expect(document.body.querySelector("#myAnimation").style.left).toEqual("");
        jest.advanceTimersByTime(5000);
        expect(document.body.querySelector("#myAnimation").style.left).toEqual("50%");
        jest.advanceTimersByTime(5000);
        expect(document.body.querySelector("#myAnimation").style.left).toEqual("99%");
    });
});


