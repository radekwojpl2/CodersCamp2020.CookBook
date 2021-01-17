import { Question } from '../src/app/Question.js';

describe("question", () => {
    const question = new Question([
        {"name":"Banana bread","imgSrc":"/static/assets/img/banana-bread.jpg","apiTitle":"banana+bread"},
        {"name":"Spaghetti carbonara","imgSrc":"/static/assets/img/carbonara.jpg","apiTitle":"spaghetti+carbonara"},
        {"name":"Cheesecake","imgSrc":"/static/assets/img/cheesecake.jpg","apiTitle":"cheesecake"},
        {"name":"Chicken pad thai","imgSrc":"/static/assets/img/chicken-pad-thai.jpg","apiTitle":"chicken+pad+thai"},
        {"name":"Chocolate brownie","imgSrc":"/static/assets/img/chocolate-brownie.jpg","apiTitle":"chocolate+brownie"},
        {"name":"Hamburger","imgSrc":"/static/assets/img/hamburger.jpg","apiTitle":"Hamburger"},
        {"name":"Spaghetti aglio et olio","imgSrc":"/static/assets/img/spaghetti-aglio-olio.jpg","apiTitle":"spaghetti+aglio+olio"},
        {"name":"Spaghetti bolognese","imgSrc":"/static/assets/img/spaghetti-bolognese.jpg","apiTitle":"spaghetti+bolognese"},
        {"name":"Strawberry shake","imgSrc":"/static/assets/img/strawberry-shake.jpg","apiTitle":"strawberry+shake"},
        {"name":"Vanilla ice cream","imgSrc":"/static/assets/img/vanilla-ice-cream.jpg","apiTitle":"vanilla+ice+cream"},
    ])
    question.currentQuestion = {
        name:"Banana bread",
        imgSrc:"/static/assets/img/banana-bread.jpg",
        apiTitle:"banana+bread",
        calories: 400,
        minCalories: 350,
        maxCalories: 450
    }

    test('checking whether answer is true', () => {
        expect(question.checkAnswer(400)).toBe(true)
        expect(question.checkAnswer('400')).toBe(true)
        expect(question.checkAnswer(450)).toBe(false)
    })

    test('checking whether points are calculated correct', () => {
        expect(question.getPoints(400)).toBe(100)
        expect(question.getPoints(425)).toBe(50)
        expect(question.getPoints(500)).toBe(0)
    })
})