class Question {
    constructor() {
        this.currentQuestion;
        this.questions = [{"name":"Polenta gnocchi with savoy cabbage and cheese","imgSrc":"https://spoonacular.com/recipeImages/656544-556x370.jpg","apiTitle":"Polenta+gnocchi+with+savoy+cabbage+and+cheese"},{"name":"Strawberry Banana Stuffed Pancakes","imgSrc":"https://spoonacular.com/recipeImages/661758-556x370.jpg","apiTitle":"Strawberry+Banana+Stuffed+Pancakes"},{"name":"Spicy Indian-Style Hummus","imgSrc":"https://spoonacular.com/recipeImages/716195-556x370.jpg","apiTitle":"Spicy+Indian-Style+Hummus"},{"name":"Pesto & Yogurt Pasta","imgSrc":"https://spoonacular.com/recipeImages/655806-556x370.jpg","apiTitle":"Pesto+&+Yogurt+Pasta"},{"name":"Trinidadian Chicken Potato Curry","imgSrc":"https://spoonacular.com/recipeImages/663824-556x370.jpg","apiTitle":"Trinidadian+Chicken+Potato+Curry"},{"name":"Korean Extra Crispy Fried Chicken w Sweet Spicy Glaze","imgSrc":"https://spoonacular.com/recipeImages/649049-556x370.jpg","apiTitle":"Korean+Extra+Crispy+Fried+Chicken+w+Sweet+Spicy+Glaze"},{"name":"Spicy Lemongrass Soup","imgSrc":"https://spoonacular.com/recipeImages/661121-556x370.jpg","apiTitle":"Spicy+Lemongrass+Soup"},{"name":"Mangolicious Upside Down Cake","imgSrc":"https://spoonacular.com/recipeImages/650858-556x370.jpg","apiTitle":"Mangolicious+Upside+Down+Cake"},{"name":"Crockpot Chicken and Dumplings","imgSrc":"https://spoonacular.com/recipeImages/640886-556x370.jpg","apiTitle":"Crockpot+Chicken+and+Dumplings"},{"name":"Avocado-Mango Salad With Grilled Shrimp","imgSrc":"https://spoonacular.com/recipeImages/633171-556x370.jpg","apiTitle":"Avocado-Mango+Salad+With+Grilled+Shrimp"},{"name":"Vegetarian Mushroom Shepherd's Pie","imgSrc":"https://spoonacular.com/recipeImages/664680-556x370.jpg","apiTitle":"Vegetarian+Mushroom+Shepherd's+Pie"},{"name":"Meatball Sliders","imgSrc":"https://spoonacular.com/recipeImages/651341-556x370.jpg","apiTitle":"Meatball+Sliders"},{"name":"Easy Cheesy Garlic Bread","imgSrc":"https://spoonacular.com/recipeImages/715559-556x370.jpg","apiTitle":"Easy+Cheesy+Garlic+Bread"},{"name":"Easy Ginger Beef Broccoli","imgSrc":"https://spoonacular.com/recipeImages/641975-556x370.jpg","apiTitle":"Easy+Ginger+Beef+Broccoli"},{"name":"Breakfast: Waffles","imgSrc":"https://spoonacular.com/recipeImages/636087-556x370.jpg","apiTitle":"Breakfast:+Waffles"},{"name":"Easy Cheesy Pizza Casserole","imgSrc":"https://spoonacular.com/recipeImages/641893-556x370.jpg","apiTitle":"Easy+Cheesy+Pizza+Casserole"},{"name":"Chicken Cordon Bleu","imgSrc":"https://spoonacular.com/recipeImages/638035-556x370.jpg","apiTitle":"Chicken+Cordon+Bleu"},{"name":"Saffron Chicken Tikka","imgSrc":"https://spoonacular.com/recipeImages/658967-556x370.jpg","apiTitle":"Saffron+Chicken+Tikka"},{"name":"Maple Glazed Bacon Wrapped Pork Tenderloin","imgSrc":"https://spoonacular.com/recipeImages/650901-556x370.jpg","apiTitle":"Maple+Glazed+Bacon+Wrapped+Pork+Tenderloin"},{"name":"Almond and cranberry shortbread","imgSrc":"https://spoonacular.com/recipeImages/632091-556x370.jpg","apiTitle":"Almond+and+cranberry+shortbread"},{"name":"Brined Chicken Breast with Sautéed Onion Dipping Sauce","imgSrc":"https://spoonacular.com/recipeImages/636118-556x370.jpg","apiTitle":"Brined+Chicken+Breast+with+Sautéed+Onion+Dipping+Sauce"},{"name":"Tropical Ice Pops","imgSrc":"https://spoonacular.com/recipeImages/663858-556x370.jpg","apiTitle":"Tropical+Ice+Pops"},{"name":"Swiss Chard Wraps","imgSrc":"https://spoonacular.com/recipeImages/662670-556x370.jpg","apiTitle":"Swiss+Chard+Wraps"},{"name":"Eggplant Parmesan","imgSrc":"https://spoonacular.com/recipeImages/642293-556x370.jpg","apiTitle":"Eggplant+Parmesan"},{"name":"DAIRY-FREE COCOA CUPCAKES WITH PEANUT BUTTER FILLING, MARSHMALLOW FROSTING","apiTitle":"DAIRY-FREE+COCOA+CUPCAKES+WITH+PEANUT+BUTTER+FILLING,+MARSHMALLOW+FROSTING"},{"name":"Watermelon Feta and Mint Salad","imgSrc":"https://spoonacular.com/recipeImages/665012-556x370.jpg","apiTitle":"Watermelon+Feta+and+Mint+Salad"},{"name":"Tex-Mex Polenta Rounds with Chunky Guacamole","imgSrc":"https://spoonacular.com/recipeImages/663054-556x370.jpg","apiTitle":"Tex-Mex+Polenta+Rounds+with+Chunky+Guacamole"},{"name":"Salmon with roasted vegetables","imgSrc":"https://spoonacular.com/recipeImages/659135-556x370.jpg","apiTitle":"Salmon+with+roasted+vegetables"},{"name":"Coconut Almond Cheesecake","imgSrc":"https://spoonacular.com/recipeImages/639714-556x370.jpg","apiTitle":"Coconut+Almond+Cheesecake"},{"name":"Strawberry Basil Sorbet (no Ice Cream Maker Necessary!)","imgSrc":"https://spoonacular.com/recipeImages/716424-556x370.jpg","apiTitle":"Strawberry+Basil+Sorbet+(no+Ice+Cream+Maker+Necessary!)"},{"name":"Steak with lemon and capers","imgSrc":"https://spoonacular.com/recipeImages/661531-556x370.jpg","apiTitle":"Steak+with+lemon+and+capers"},{"name":"Agave Glazed Carrots","imgSrc":"https://spoonacular.com/recipeImages/632015-556x370.jpg","apiTitle":"Agave+Glazed+Carrots"},{"name":"Crispy Pineapple Fritters","imgSrc":"https://spoonacular.com/recipeImages/640827-556x370.jpg","apiTitle":"Crispy+Pineapple+Fritters"},{"name":"Caramelized Tofu & Gala Apple Salad","imgSrc":"https://spoonacular.com/recipeImages/637067-556x370.jpg","apiTitle":"Caramelized+Tofu+&+Gala+Apple+Salad"},{"name":"Easy Vegetable Fried Rice","imgSrc":"https://spoonacular.com/recipeImages/642138-556x370.jpg","apiTitle":"Easy+Vegetable+Fried+Rice"},{"name":"Avocado Egg Salad","imgSrc":"https://spoonacular.com/recipeImages/716245-556x370.jpg","apiTitle":"Avocado+Egg+Salad"},{"name":"Vanilla Pound Cake","imgSrc":"https://spoonacular.com/recipeImages/716367-556x370.jpg","apiTitle":"Vanilla+Pound+Cake"},{"name":"Green Tea Fruit Medley Smoothie","imgSrc":"https://spoonacular.com/recipeImages/645530-556x370.jpg","apiTitle":"Green+Tea+Fruit+Medley+Smoothie"},{"name":"Soy Ginger Glazed Halibut w/ Ginger Peach Relish","imgSrc":"https://spoonacular.com/recipeImages/660736-556x370.jpg","apiTitle":"Soy+Ginger+Glazed+Halibut+w/+Ginger+Peach+Relish"},{"name":"Herbed Goat Cheese Yogurt Dip w. Caramelized Onions","imgSrc":"https://spoonacular.com/recipeImages/716435-556x370.jpg","apiTitle":"Herbed+Goat+Cheese+Yogurt+Dip+w.+Caramelized+Onions"},{"name":"Eggplant & Artichoke Heart Galettes","imgSrc":"https://spoonacular.com/recipeImages/642272-556x370.jpg","apiTitle":"Eggplant+&+Artichoke+Heart+Galettes"},{"name":"Almond Plum Cake with Creme Fraiche","imgSrc":"https://spoonacular.com/recipeImages/632169-556x370.jpg","apiTitle":"Almond+Plum+Cake+with+Creme+Fraiche"},{"name":"Baby Chick Cupcakes","imgSrc":"https://spoonacular.com/recipeImages/633229-556x370.jpg","apiTitle":"Baby+Chick+Cupcakes"},{"name":"Cinnamon Eggless Coffee Cake","imgSrc":"https://spoonacular.com/recipeImages/639456-556x370.jpg","apiTitle":"Cinnamon+Eggless+Coffee+Cake"},{"name":"Hot Pepper Pumpkin Soup","imgSrc":"https://spoonacular.com/recipeImages/647501-556x370.jpg","apiTitle":"Hot+Pepper+Pumpkin+Soup"},{"name":"Skinny Green Monster Smoothie","imgSrc":"https://spoonacular.com/recipeImages/660227-556x370.jpg","apiTitle":"Skinny+Green+Monster+Smoothie"},{"name":"Herbivoracious' White Bean and Kale Soup","imgSrc":"https://spoonacular.com/recipeImages/646738-556x370.jpg","apiTitle":"Herbivoracious'+White+Bean+and+Kale+Soup"},{"name":"Raised Doughnuts","imgSrc":"https://spoonacular.com/recipeImages/657761-556x370.jpg","apiTitle":"Raised+Doughnuts"},{"name":"Dried Fruit and Ginger Scones","imgSrc":"https://spoonacular.com/recipeImages/641651-556x370.jpg","apiTitle":"Dried+Fruit+and+Ginger+Scones"},{"name":"Classic Vanilla-Orange Sugar Cookies","imgSrc":"https://spoonacular.com/recipeImages/639644-556x370.jpg","apiTitle":"Classic+Vanilla-Orange+Sugar+Cookies"},{"name":"Crispy Italian Cauliflower Poppers Appetizer","imgSrc":"https://spoonacular.com/recipeImages/640819-556x370.jpg","apiTitle":"Crispy+Italian+Cauliflower+Poppers+Appetizer"},{"name":"Best Ever Bolognese Sauce","imgSrc":"https://spoonacular.com/recipeImages/634900-556x370.jpg","apiTitle":"Best+Ever+Bolognese+Sauce"},{"name":"Crunchy Brussels Sprouts Side Dish","imgSrc":"https://spoonacular.com/recipeImages/640941-556x370.jpg","apiTitle":"Crunchy+Brussels+Sprouts+Side+Dish"},{"name":"4 Ingredient Chicken Pot Pie","imgSrc":"https://spoonacular.com/recipeImages/631868-556x370.jpg","apiTitle":"4+Ingredient+Chicken+Pot+Pie"},{"name":"Peach Pie","imgSrc":"https://spoonacular.com/recipeImages/655145-556x370.jpg","apiTitle":"Peach+Pie"},{"name":"Crispy Buttermilk Fried Chicken","imgSrc":"https://spoonacular.com/recipeImages/640803-556x370.jpg","apiTitle":"Crispy+Buttermilk+Fried+Chicken"},{"name":"Stinging Nettle Pesto","imgSrc":"https://spoonacular.com/recipeImages/661645-556x370.jpg","apiTitle":"Stinging+Nettle+Pesto"},{"name":"Chicken Porridge","imgSrc":"https://spoonacular.com/recipeImages/638257-556x370.jpg","apiTitle":"Chicken+Porridge"},{"name":"Brown Butter Twice Baked Sweet Potatoes","imgSrc":"https://spoonacular.com/recipeImages/715544-556x370.jpg","apiTitle":"Brown+Butter+Twice+Baked+Sweet+Potatoes"},{"name":"Chicken Farfalle with Low-Fat Alfredo Sauce","imgSrc":"https://spoonacular.com/recipeImages/638088-556x370.jpg","apiTitle":"Chicken+Farfalle+with+Low-Fat+Alfredo+Sauce"},{"name":"Citrus Beet Salad","imgSrc":"https://spoonacular.com/recipeImages/639515-556x370.jpg","apiTitle":"Citrus+Beet+Salad"},{"name":"Powerhouse Almond Matcha Superfood Smoothie","imgSrc":"https://spoonacular.com/recipeImages/756814-556x370.jpg","apiTitle":"Powerhouse+Almond+Matcha+Superfood+Smoothie"},{"name":"Maple-Glazed Apple Cookies","imgSrc":"https://spoonacular.com/recipeImages/650939-556x370.jpg","apiTitle":"Maple-Glazed+Apple+Cookies"},{"name":"Moist Zucchini Pineapple Sweetbread","imgSrc":"https://spoonacular.com/recipeImages/652240-556x370.jpg","apiTitle":"Moist+Zucchini+Pineapple+Sweetbread"},{"name":"Asparagus and Pea Soup: Real Convenience Food","imgSrc":"https://spoonacular.com/recipeImages/716406-556x370.jpg","apiTitle":"Asparagus+and+Pea+Soup:+Real+Convenience+Food"},{"name":"Bacon & Crimini Mushroom Risotto","imgSrc":"https://spoonacular.com/recipeImages/633258-556x370.jpg","apiTitle":"Bacon+&+Crimini+Mushroom+Risotto"},{"name":"How to Make Party Jollof Rice","imgSrc":"https://spoonacular.com/recipeImages/716298-556x370.jpg","apiTitle":"How+to+Make+Party+Jollof+Rice"},{"name":"Rice and Peas with Coconut Curry Mackerel","imgSrc":"https://spoonacular.com/recipeImages/716364-556x370.jpg","apiTitle":"Rice+and+Peas+with+Coconut+Curry+Mackerel"},{"name":"Gluten Free Blueberry Muffins","imgSrc":"https://spoonacular.com/recipeImages/644800-556x370.jpg","apiTitle":"Gluten+Free+Blueberry+Muffins"},{"name":"Chocolate Asparagus Bundt Cake","imgSrc":"https://spoonacular.com/recipeImages/638819-556x370.jpg","apiTitle":"Chocolate+Asparagus+Bundt+Cake"},{"name":"Pasta With Wild Mushrooms, Peas and Bacon","imgSrc":"https://spoonacular.com/recipeImages/654965-556x370.jpg","apiTitle":"Pasta+With+Wild+Mushrooms,+Peas+and+Bacon"},{"name":"Creamy Polenta with Egg, Arrabiata & Bacon","imgSrc":"https://spoonacular.com/recipeImages/640676-556x370.jpg","apiTitle":"Creamy+Polenta+with+Egg,+Arrabiata+&+Bacon"},{"name":"Black Forest Mini Cheesecakes","imgSrc":"https://spoonacular.com/recipeImages/635113-556x370.jpg","apiTitle":"Black+Forest+Mini+Cheesecakes"},{"name":"Stuffed Artichoke Main Dish","imgSrc":"https://spoonacular.com/recipeImages/640921-556x370.jpg","apiTitle":"Stuffed+Artichoke+Main+Dish"},{"name":"Crabby Corn Chowder","imgSrc":"https://spoonacular.com/recipeImages/640336-556x370.jpg","apiTitle":"Crabby+Corn+Chowder"},{"name":"Banana, Cranberry and Apple Bread","imgSrc":"https://spoonacular.com/recipeImages/634213-556x370.jpg","apiTitle":"Banana,+Cranberry+and+Apple+Bread"},{"name":"Lemon and Honey Chicken","imgSrc":"https://spoonacular.com/recipeImages/649503-556x370.jpg","apiTitle":"Lemon+and+Honey+Chicken"},{"name":"Beef Cottage Pie","imgSrc":"https://spoonacular.com/recipeImages/634605-556x370.jpg","apiTitle":"Beef+Cottage+Pie"},{"name":"Banana & Cream Cheese Stuffed French Toast","imgSrc":"https://spoonacular.com/recipeImages/633971-556x370.jpg","apiTitle":"Banana+&+Cream+Cheese+Stuffed+French+Toast"},{"name":"Savory corn and chives muffins","imgSrc":"https://spoonacular.com/recipeImages/659465-556x370.jpg","apiTitle":"Savory+corn+and+chives+muffins"},{"name":"Baked Pork Buns","imgSrc":"https://spoonacular.com/recipeImages/633721-556x370.jpg","apiTitle":"Baked+Pork+Buns"},{"name":"Lemon Coconut Granola","imgSrc":"https://spoonacular.com/recipeImages/649567-556x370.jpg","apiTitle":"Lemon+Coconut+Granola"},{"name":"Savory Radicchio and Prosciutto Crostini Topped with Sweet Syrupy Sapa","imgSrc":"https://spoonacular.com/recipeImages/631756-556x370.jpg","apiTitle":"Savory+Radicchio+and+Prosciutto+Crostini+Topped+with+Sweet+Syrupy+Sapa"},{"name":"Mini Nutella Cheesecakes","imgSrc":"https://spoonacular.com/recipeImages/1098349-556x370.jpg","apiTitle":"Mini+Nutella+Cheesecakes"},{"name":"Filipino Egg Rolls","imgSrc":"https://spoonacular.com/recipeImages/642863-556x370.jpg","apiTitle":"Filipino+Egg+Rolls"},{"name":"Roast Chicken with Apples and Rosemary","imgSrc":"https://spoonacular.com/recipeImages/658418-556x370.jpg","apiTitle":"Roast+Chicken+with+Apples+and+Rosemary"},{"name":"Curried Butternut Squash and Apple Soup","imgSrc":"https://spoonacular.com/recipeImages/641057-556x370.jpg","apiTitle":"Curried+Butternut+Squash+and+Apple+Soup"},{"name":"Balsamic Roasted Vegetables","imgSrc":"https://spoonacular.com/recipeImages/633942-556x370.jpg","apiTitle":"Balsamic+Roasted+Vegetables"},{"name":"Cake with lemon, rosewater and pistachios","imgSrc":"https://spoonacular.com/recipeImages/636766-556x370.jpg","apiTitle":"Cake+with+lemon,+rosewater+and+pistachios"},{"name":"Couscous with olives","imgSrc":"https://spoonacular.com/recipeImages/640238-556x370.jpg","apiTitle":"Couscous+with+olives"},{"name":"Sardine Croquettes (Croquetas De Sardinas)","imgSrc":"https://spoonacular.com/recipeImages/659270-556x370.jpg","apiTitle":"Sardine+Croquettes+(Croquetas+De+Sardinas)"},{"name":"Almond Cookie Bar","imgSrc":"https://spoonacular.com/recipeImages/632116-556x370.jpg","apiTitle":"Almond+Cookie+Bar"},{"name":"Banana & Oreo Muffin","imgSrc":"https://spoonacular.com/recipeImages/633970-556x370.jpg","apiTitle":"Banana+&+Oreo+Muffin"},{"name":"Red Lentil Soup with Chicken and Turnips","imgSrc":"https://spoonacular.com/recipeImages/715415-556x370.jpg","apiTitle":"Red+Lentil+Soup+with+Chicken+and+Turnips"},{"name":"Slow Cooked Corned Beef and Cabbage","imgSrc":"https://spoonacular.com/recipeImages/660266-556x370.jpg","apiTitle":"Slow+Cooked+Corned+Beef+and+Cabbage"},{"name":"Slow Cooker Poblano Corn Chowder with Chicken and Chorizo","imgSrc":"https://spoonacular.com/recipeImages/660297-556x370.jpg","apiTitle":"Slow+Cooker+Poblano+Corn+Chowder+with+Chicken+and+Chorizo"},{"name":"Corned Beef Cakes","imgSrc":"https://spoonacular.com/recipeImages/797177-556x370.jpg","apiTitle":"Corned+Beef+Cakes"},{"name":"Whole Grain Pumpkin Bread","imgSrc":"https://spoonacular.com/recipeImages/665257-556x370.jpg","apiTitle":"Whole+Grain+Pumpkin+Bread"},{"name":"Bourbon Street Beignets","imgSrc":"https://spoonacular.com/recipeImages/635741-556x370.jpg","apiTitle":"Bourbon+Street+Beignets"},{"name":"Gluten Free Dairy Free Buttermilk Biscuits","imgSrc":"https://spoonacular.com/recipeImages/644817-556x370.jpg","apiTitle":"Gluten+Free+Dairy+Free+Buttermilk+Biscuits"}]
    }

    getQuestion() {
        this.currentQuestion = this.questions[Math.floor(Math.random() * this.questions.length)]
        const data = fetch(`https://api.spoonacular.com/recipes/guessNutrition?title=${this.currentQuestion.apiTitle}&apiKey=08dba6e965974fdb9c6a8cc7b0f8f4f0`)
            .then( res => res.json() )
            .then ( data => {
                console.log(data)
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

    // static async getRandomQuestions() {
    //     // const questions = []
    //     const response = await fetch("https://api.spoonacular.com/recipes/random?number=100&apiKey=08dba6e965974fdb9c6a8cc7b0f8f4f0")
    //     const data = await response.json()
    //     const recipes = await data.recipes
    //     const questions = await recipes.map( recipe => {
    //         return {
    //             name: recipe.title,
    //             imgSrc: recipe.image,
    //             apiTitle: recipe.title.split(" ").join("+")
    //         }
    //     })
    //     console.log(JSON.stringify(questions))
    //     return questions
    // }
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
        console.log(this)
        if (!this.questionSection.classList.contains("active")) this.showQuestionSection()
        const currentQuestion = question.getQuestion()
        this.imgInput.src = currentQuestion.imgSrc
        this.dishNameInput.textContent = currentQuestion.name

        this.checkBtn.addEventListener("click", this.sumUpRound.bind(this, question), {once: true})

        document.querySelector(".timer").classList.add("active")
    }

    sumUpRound(question, e) {
        e.preventDefault()
        document.querySelector(".timer").classList.remove("active")
        const result = question.checkAnswer(this.answerInput.value)
        if (result) {
            this.stats.addPoints(50)
        }
        setTimeout(this.startRound.bind(this), 1000)
    }
}

const game = new Game() 