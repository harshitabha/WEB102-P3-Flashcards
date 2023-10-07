import CARD_DATA from "./cards"

// create a list of objects to store data about the various questions cards
const CARDS_JSON = JSON.parse(CARD_DATA);
let allDrawnCards = [];
let currentRoundCards = [];
let lastIndex;
let currentIndex;

/* Gets a random card to display */
function getRandomCard () {
    let randIndex = Math.floor(Math.random() * CARDS_JSON.length);
    // reset the cards if all of them have been drawn
    if (allDrawnCards.length == CARDS_JSON.length) {
        lastIndex = allDrawnCards[-1];
        currentRoundCards = [];
    }
    //if a card has already been draw choose another random card
    while (currentRoundCards.indexOf(randIndex) !== -1) randIndex = Math.floor(Math.random() * CARDS_JSON.length);
    
    allDrawnCards.push(randIndex);
    currentRoundCards.push(randIndex);
    currentIndex = randIndex;
    return CARDS_JSON[randIndex];
}

/* Gets the last card drawn */
export function prevCard() {
    const indexInDarwnArr = allDrawnCards.indexOf(currentIndex);

    // various consitions
    const isFirstCard = indexInDarwnArr === 0 && lastIndex === undefined;
    const allCardsHaveBeenDrawn = indexInDarwnArr === 0 && lastIndex !== undefined;


    // get the last card from the save var lastIndex because the indexes arr has just been reset
    if (isFirstCard) {
        alert("This is the first card");
        return CARDS_JSON[currentIndex];
    } else if (allCardsHaveBeenDrawn) {
        currentIndex = lastIndex; 
        return CARDS_JSON(lastIndex); 
    }
    else {
        currentIndex = allDrawnCards[indexInDarwnArr - 1];
        return CARDS_JSON[currentIndex];
    }

}

/* Gets the next card */
export function nextCard() { 
    const indexInDarwnArr = allDrawnCards.indexOf(currentIndex);
    
    if (indexInDarwnArr !== (allDrawnCards.length - 1)) {
        currentIndex = allDrawnCards[indexInDarwnArr + 1];
        return CARDS_JSON[currentIndex];
    } else {
        return getRandomCard();
    }

}

// Return the first card
export function firstCard() { 
    if (allDrawnCards.indexOf(0) === -1) {
        allDrawnCards.push(0);
        currentIndex = 0;
    }
    return CARDS_JSON[0]; 
}

/** Gets the total number of cards */
export function totalCards() { return CARDS_JSON.length; }