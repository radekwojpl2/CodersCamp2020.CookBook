export class Stats {
    constructor(points) {
        this.points = points
    }

    addPoints(newPoints) {
        let i = 0;
        const addingPoints = setInterval(() => {
            if (i >= newPoints - 1) {
                clearInterval(addingPoints);
            }
            i++;
            this.points++;
            document.querySelector(".score span").textContent = this.points; 
            return this.points
        }, 15)
        
    }
}