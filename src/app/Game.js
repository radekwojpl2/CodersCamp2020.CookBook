import {MainMenu} from './MainMenu.js';

class Question {
    constructor(questions) {
        this.currentQuestion;
        this.questions = questions
    }

    getQuestion() {
        const index = Math.floor(Math.random() * this.questions.length)
        this.currentQuestion = this.questions[index];
        this.questions.splice(index, 1);
        console.log(this.questions);
        const data = fetch(`https://api.spoonacular.com/recipes/guessNutrition?title=${this.currentQuestion.apiTitle}&apiKey=08dba6e965974fdb9c6a8cc7b0f8f4f0`)
            .then( res => res.json() )
            .then ( data => {
                const calories = data.calories.value
                this.currentQuestion.calories = calories
                this.currentQuestion.minCalories = calories - 0.05 * calories
                this.currentQuestion.maxCalories = calories + 0.05 * calories
                console.log(this.currentQuestion)
            })
            .catch( error => console.log(error))
        return this.currentQuestion
    }
    
    checkAnswer(answer) {
        console.log(this.currentQuestion.calories)
        if (this.currentQuestion.calories == "undefined") console.log('za szybko')
        answer = parseInt(answer)
        const minCalories = this.currentQuestion.minCalories
        const maxCalories = this.currentQuestion.maxCalories
        if (answer > minCalories && answer < maxCalories) return true
        else return false
    }
}


class Stats {
    constructor(points) {
        this.points = points
    }

    addPoints(newPoints) {
        let i = 0;
        const addingPoints = setInterval(() => {
            if (i === newPoints - 1) clearInterval(addingPoints);
            i++;
            this.points++;
            document.querySelector(".score").textContent = this.points;  
        }, 15)
    }
}

class Timer {
    constructor(time) {
        this.time = time
        this.timeLeft = this.time
    }

    startTimer() {
        document.querySelector(".timer").classList.add("active")
        const timer = setInterval( () => {
            this.timeLeft -= 1
            if (this.timeLeft === 0) {
                clearInterval(timer)
                return true
            }
        }, 1000)
    }
    getTimeLeft() {
        return this.timeLeft
    }
}

class Game {
    constructor() {
        MainMenu()
        this.questions = [
            {"name":"Banana bread","imgSrc":"/static/assets/img/banana-bread.jpg","apiTitle":"banana+bread"},
            {"name":"Spaghetti carbonara","imgSrc":"/static/assets/img/carbonara.jpg","apiTitle":"spaghetti+carbonara"},
            {"name":"Cheesecake","imgSrc":"/static/assets/img/cheesecake.jpg","apiTitle":"cheesecake"},
            {"name":"Chicken pad thai","imgSrc":"/static/assets/img/chicken-pad-thai.jpg","apiTitle":"chicken+pad+thai"},
            {"name":"Chocolate brownie","imgSrc":"/static/assets/img/chocolate-brownie.jpg","apiTitle":"chocolate+brownie"},
            {"name":"Hamburger","imgSrc":"/static/assets/img/hamburger.jpg","apiTitle":"Hamburger"},
            {"name":"Spaghetti aglio olio","imgSrc":"/static/assets/img/spaghetti-aglio-olio.jpg","apiTitle":"spaghetti+aglio+olio"},
            {"name":"Spaghetti bolognese","imgSrc":"/static/assets/img/spaghetti-bolognese.jpg","apiTitle":"spaghetti+bolognese"},
            {"name":"Strawberry shake","imgSrc":"/static/assets/img/strawberry-shake.jpg","apiTitle":"strawberry+shake"},
            {"name":"Vanilla ice cream","imgSrc":"/static/assets/img/vanilla-ice-cream.jpg","apiTitle":"vanilla+ice+cream"},
        ]
        this.startBtn = document.querySelector(".start")
        this.questionSection = document.querySelector(".question")
        this.imgInput = document.querySelector(".dish-img")
        this.dishNameInput = document.querySelector(".dish-name")
        this.checkBtn = document.querySelector(".submit")
        this.answerInput = document.querySelector(".answer")
        this.correctAnswer = document.querySelector(".correct-answer")

        this.stats = new Stats(0)
        
        this.startBtn.addEventListener("click", this.startRound.bind(this), {once: true})
    }

    showQuestionSection() {
        this.questionSection.classList.add("active")
    }
    startRound() {
        this.reset()
        const question = new Question(this.questions)
        const timer = new Timer(15)
        if (!this.questionSection.classList.contains("active")) this.showQuestionSection()
        const currentQuestion = question.getQuestion()
        this.imgInput.src = currentQuestion.imgSrc
        this.dishNameInput.textContent = currentQuestion.name
        timer.startTimer()

        this.checkBtn.addEventListener("click", this.sumUpRound.bind(this, question, timer), {once: true})
        
    }

    sumUpRound(question, timer, e) {
        e.preventDefault();
        document.querySelector(".timer").classList.remove("active")
        const result = question.checkAnswer(this.answerInput.value)
        const timeLeft = timer.getTimeLeft()
        console.log(timeLeft)
        if (result) {
            this.correctAnswer.textContent = `Correct answer is: ${question.currentQuestion.calories}.`
            this.imgInput.classList.add("true")
            this.stats.addPoints(timeLeft * 10)
            
            if (this.questions.length < 1) console.log("koniec gry")
            else setTimeout(this.startRound.bind(this), timeLeft * 150 + 500)
        } else {
            this.imgInput.classList.add("false")
            this.correctAnswer.textContent = `Correct answer is: ${question.currentQuestion.calories}.`
            if (this.questions.length < 1) console.log("koniec gry")
            else setTimeout(this.startRound.bind(this), 1000)
        }
    }
    reset() {
        this.correctAnswer.textContent = "";
        this.answerInput.value = "";
        this.imgInput.classList.remove("false");
        this.imgInput.classList.remove("true");
    }
}

const game = new Game() 