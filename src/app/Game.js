class Question {
    constructor() {
        this.currentQuestion;
        this.questions = [
            {
                name: "Spaghetti Carbonara",
                apiTitle: "Spaghetti+Carbonara",
                imgSrc: "static/assets/img/carbonara.jpeg"
            },
            {
                name: "Spaghetti Aglio et Olio",
                apiTitle: "Spaghetti+Aglio+et+Olio",
                imgSrc: "static/assets/img/spaghetti-aglio-olio.jpg"
            }
        ]
    }

    getQuestion() {
        this.currentQuestion = this.questions[Math.floor(Math.random() * this.questions.length)]
        const data = fetch(`https://api.spoonacular.com/recipes/guessNutrition?title=${this.currentQuestion.apiTitle}&apiKey=08dba6e965974fdb9c6a8cc7b0f8f4f0`)
            .then( res => res.json() )
            .then ( data => {
                const min = data.calories.confidenceRange95Percent.min
                const max = data.calories.confidenceRange95Percent.max
                const calories = data.calories.value
                this.currentQuestion.calories = calories
                this.currentQuestion.minCalories = min
                this.currentQuestion.maxCalories = max
            })
        return this.currentQuestion
    }
    
    checkAnswer(answer) {
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
        }, 25)
    }
}

class Game {
    constructor() {
        this.startBtn = document.querySelector(".start")
        this.questionSection = document.querySelector(".question")
        this.imgInput = document.querySelector(".dish-img")
        this.dishNameInput = document.querySelector(".dish-name")
        this.checkBtn = document.querySelector(".submit")
        this.answerInput = document.querySelector(".answer")

        this.stats = new Stats(0)
        
        this.startBtn.addEventListener("click", this.startRound.bind(this))
    }

    showQuestionSection() {
        this.questionSection.classList.add("active")
    }
    startRound() {
        const question = new Question()
        if (!this.questionSection.classList.contains("active")) this.showQuestionSection()
        const currentQuestion = question.getQuestion()
        this.imgInput.src = currentQuestion.imgSrc
        this.dishNameInput.textContent = currentQuestion.name

        this.checkBtn.addEventListener("click", this.sumUpRound.bind(this, question))

        document.querySelector(".timer").classList.add("active")
    }

    sumUpRound(question, e) {
        e.preventDefault()
        document.querySelector(".timer").classList.remove("active")
        const result = question.checkAnswer(this.answerInput.value)
        if (result) {
            this.stats.addPoints(50)
        }
    }
}

const game = new Game()


// GETTING RANDOM RECIPES

// fetch("https://api.spoonacular.com/recipes/random?number=100&apiKey=08dba6e965974fdb9c6a8cc7b0f8f4f0")
// .then(res => res.json())
// .then(data => console.log(data.recipes))

 