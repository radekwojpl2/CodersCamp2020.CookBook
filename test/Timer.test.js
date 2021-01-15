import { Timer } from '../src/app/Timer.js';


describe("timer", () => {
    document.body.innerHTML = `
    <button class="start">Start game</button>
    <div class="timeline">
        <div class="timer"></div>
    </div>
    `
    const timerDiv = document.querySelector(".timer")

    const timer = new Timer(15)  

    test('adds class active', () => {
        timer.startTimer()
        expect(timerDiv.classList.contains("active")).toBeTruthy()   
    })

    test('removes class active', () => {
        timer.stopTimer()
        expect(timerDiv.classList.contains("active")).toBeFalsy()
    })
})