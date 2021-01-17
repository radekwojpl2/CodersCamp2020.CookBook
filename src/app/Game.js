import { Question } from './Question.js';
import { Timer } from './Timer.js';
import { Stats } from './Stats.js';

export class Game {
    constructor() {    
        this.questions = [
            {"name":"Banana bread","imgSrc":"/CodersCamp2020.CookBook/static/assets/img/banana-bread.jpg","apiTitle":"banana+bread"},
            {"name":"Spaghetti carbonara","imgSrc":"/CodersCamp2020.CookBook/static/assets/img/carbonara.jpg","apiTitle":"spaghetti+carbonara"},
            {"name":"Cheesecake","imgSrc":"/CodersCamp2020.CookBook/static/assets/img/cheesecake.jpg","apiTitle":"cheesecake"},
            {"name":"Chicken pad thai","imgSrc":"/CodersCamp2020.CookBook/static/assets/img/chicken-pad-thai.jpg","apiTitle":"chicken+pad+thai"},
            {"name":"Chocolate brownie","imgSrc":"/CodersCamp2020.CookBook/static/assets/img/chocolate-brownie.jpg","apiTitle":"chocolate+brownie"},
            {"name":"Hamburger","imgSrc":"/CodersCamp2020.CookBook/static/assets/img/hamburger.jpg","apiTitle":"Hamburger"},
            {"name":"Spaghetti aglio et olio","imgSrc":"/CodersCamp2020.CookBook/static/assets/img/spaghetti-aglio-olio.jpg","apiTitle":"spaghetti+aglio+olio"},
            {"name":"Spaghetti bolognese","imgSrc":"/CodersCamp2020.CookBook/static/assets/img/spaghetti-bolognese.jpg","apiTitle":"spaghetti+bolognese"},
            {"name":"Strawberry shake","imgSrc":"/CodersCamp2020.CookBook/static/assets/img/strawberry-shake.jpg","apiTitle":"strawberry+shake"},
            {"name":"Vanilla ice cream","imgSrc":"/CodersCamp2020.CookBook/static/assets/img/vanilla-ice-cream.jpg","apiTitle":"vanilla+ice+cream"},
        ]
        this.startBtn = document.querySelector(".start")
        this.instructionSection = document.querySelector(".instruction")
        this.gameSection = document.querySelector(".game")
        this.imgInput = document.querySelector(".dish-img")
        this.dishNameInput = document.querySelector(".dish-name")
        this.checkBtn = document.querySelector(".submit")
        this.answerInput = document.querySelector(".answer")
        this.correctAnswer = document.querySelector(".correct-answer")
        this.gameOverBlock = document.querySelector(".game-over")
        this.finalScoreInput = document.querySelector(".game-over .score span")

        this.stats = new Stats(0)
        
        document.addEventListener('DOMContentLoaded', () => {
            this.startBtn.addEventListener("click", this.startRound.bind(this), {once: true})
            this.checkBtn.addEventListener("click", (event) => event.preventDefault())
        })
    }

    showQuestionSection() {
        this.gameSection.classList.add("active")
        this.instructionSection.classList.remove("active")
    }

    async startRound() {
        const question = new Question(this.questions)
        const timer = new Timer(15)
        if (!this.gameSection.classList.contains("active")) this.showQuestionSection()
        const currentQuestion = await question.getQuestion()
        this.reset()
        this.imgInput.src = await currentQuestion.imgSrc
        this.imgInput.alt = await currentQuestion.name
        this.dishNameInput.textContent = await currentQuestion.name
        timer.startTimer(await question, this)
        
        this.sumUpRoundFunction = this.sumUpRound.bind(this, question, timer)
        this.checkBtn.addEventListener("click", this.sumUpRoundFunction, {once: true})  
    }

    sumUpRound(question, timer, event) {
        event.preventDefault();
        timer.stopTimer();
        const result = question.checkAnswer(this.answerInput.value)
        const timeLeft = timer.getTimeLeft()
        this.getResult(question, result)
    }

    getResult(question, result) {
        this.checkBtn.removeEventListener("click", this.sumUpRoundFunction)
        if (result) {
            this.correctAnswer.textContent = `Correct answer is: ${question.currentQuestion.calories}.`
            this.imgInput.classList.add("true")
            const points = question.getPoints(+this.answerInput.value)
            this.stats.addPoints(points)
            if (this.questions.length < 6) setTimeout(this.endGame.bind(this), points * 15)
            else setTimeout(this.startRound.bind(this), points * 15 + 500)
        } else {
            this.imgInput.classList.add("false")
            this.correctAnswer.textContent = `Correct answer is: ${question.currentQuestion.calories}.`
            if (this.questions.length < 6) this.endGame()
            else setTimeout(this.startRound.bind(this), 500)
        }
    }

    reset() {
        this.correctAnswer.textContent = "...";
        this.answerInput.value = "";
        this.imgInput.classList.remove("false");
        this.imgInput.classList.remove("true");
    }

    endGame() {
        setTimeout(() => {
            console.log("Koniec gry!")
            this.reset()
            this.gameOverBlock.classList.add("active")
            this.finalScoreInput.textContent = this.stats.points
        }, 1000)
    }
}