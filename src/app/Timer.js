export class Timer {
    constructor(time) {
        this.time = time
        this.timeLeft = this.time
        this.timer
    }

    startTimer(question, game) {
        document.querySelector(".timer").classList.add("active")
        this.timer = setInterval( () => {
            this.timeLeft -= 1
            if (this.timeLeft === 0) {
                this.stopTimer()
                game.getResult(question)
                return true
            }
        }, 1000)
    }

    getTimeLeft() {
        return this.timeLeft
    }

    stopTimer() {
        clearInterval(this.timer)
        document.querySelector(".timer").classList.remove("active")
    }
}