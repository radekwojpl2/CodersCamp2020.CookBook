export class Question {
    constructor(questions) {
        this.currentQuestion;
        this.questions = questions
    }

    getQuestion() {
        const index = Math.floor(Math.random() * this.questions.length)
        this.currentQuestion = this.questions[index];
        this.questions.splice(index, 1);
        return fetch(`https://api.spoonacular.com/recipes/guessNutrition?title=${this.currentQuestion.apiTitle}&apiKey=08dba6e965974fdb9c6a8cc7b0f8f4f0`)
            .then( res => res.json() )
            .then ( data => {
                const calories = data.calories.value
                this.currentQuestion.calories = calories
                this.currentQuestion.minCalories = calories - 0.1 * calories
                this.currentQuestion.maxCalories = calories + 0.1 * calories
                return this.currentQuestion
            })
            .catch( error => {throw Error(error) })   
    }
    
    checkAnswer(answer) {
        answer = parseInt(answer)
        const minCalories = this.currentQuestion.minCalories
        const maxCalories = this.currentQuestion.maxCalories
        if (answer > minCalories && answer < maxCalories) return true
        else return false
    }

    getPoints(answer) {
        if (answer > this.currentQuestion.maxCalories || answer < this.currentQuestion.minCalories) return 0
        const differenceBetweenCaloriesAndMinCalories = Math.round(this.currentQuestion.calories - this.currentQuestion.minCalories)
        const differenceBetweenAnswerAndCalories = Math.abs(answer - this.currentQuestion.calories)
        const points = Math.abs(Math.round(differenceBetweenAnswerAndCalories / differenceBetweenCaloriesAndMinCalories * 100) - 100)
        return points
    }
}