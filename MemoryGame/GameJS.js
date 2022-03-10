const cardArray = [
    {
        name: "fries",
        img: "Images/Fries.jpg"
    },
    {
        name: "burger",
        img: "Images/burger.jpg"
    },
    {
        name: "hotdog",
        img: "Images/HotDog.jpg"
    },
    {
        name: "pizza",
        img: "Images/Pizza.jpg"
    },
    {
        name: "soda",
        img: "Images/Soda.jpg"
    },
    {
        name: "taco",
        img: "Images/taco.jpg"
    },
    {
        name: "fries",
        img: "Images/Fries.jpg"
    },
    {
        name: "burger",
        img: "Images/burger.jpg"
    },
    {
        name: "hotdog",
        img: "Images/HotDog.jpg"
    },
    {
        name: "pizza",
        img: "Images/Pizza.jpg"
    },
    {
        name: "soda",
        img: "Images/Soda.jpg"
    },
    {
        name: "taco",
        img: "Images/taco.jpg"
    }
]
cardArray.sort(() => 0.5 - Math.random()); 

const gridDisplay = document.querySelector("#grid"); 
const scoreDisplay = document.getElementById("score")
const messageDisplay = document.getElementById("message")
let cardsChosen = [];
let cardChosenIDs = [];
let cardsMatched = []; 

function createBoard() {
    for( let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "Images/Food.jpg")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplay.append(card)
    }
}
createBoard();

function checkCardsIfMatched() {
    const cards = document.querySelectorAll("img")
    const optionOneID = cardChosenIDs[0]
    const optionTwoID = cardChosenIDs[1]
    console.log(optionOneID, optionTwoID)
    if (optionOneID === optionTwoID) {
        messageDisplay.innerHTML = "You have clicked the same image!"; 
        cards[optionOneID].setAttribute("src", "Images/Food.jpg")
        cards[optionTwoID].setAttribute("src", "Images/Food.jpg")
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        messageDisplay.innerHTML = "You found a match!";
        cards[optionOneID].setAttribute("src", "Images/Blank.png")
        cards[optionTwoID].setAttribute("src", "Images/Blank.png")
        cards[optionOneID].removeEventListener("click", flipCard)
        cards[optionTwoID].removeEventListener("click", flipCard)
        cardsMatched.push(cardsChosen); 
    } else {
        cards[optionOneID].setAttribute("src", "Images/Food.jpg")
        cards[optionTwoID].setAttribute("src", "Images/Food.jpg")
        messageDisplay.innerHTML = "Sorry, try again!";
    }
  scoreDisplay.innerText = cardsMatched.length;
    cardsChosen = [];
    cardChosenIDs = []; 
    if (cardsMatched.length == cardArray.length/2) {
        messageDisplay.innerHTML = "Congratulations! You've found them all!"
    }
}

function flipCard() {
    let cardID = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardID].name);
    cardChosenIDs.push(cardID); 
    console.log(cardsChosen); 
    this.setAttribute("src", cardArray[cardID].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkCardsIfMatched, 500)
    }
}

// Work in progress
// const newGameButton = document.getElementById("new-game").addEventListener("click", newGame);


// Further elements/additions that I could implement:
// - A reset button
// - New levels to the game
// - Homepage to either select the level or to choose a topic ie. doesn't have to just be food
// - Following the previous, different images eg. animals

// Bugs in here that I am aware of: 
// -If you click the same card twice, it acts as a match, instead of turning them back and asking you to try again

