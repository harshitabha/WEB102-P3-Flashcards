import CARD_DATA from "./cards"

// create a list of objects to store data about the various questions cards
const CARDS_JSON = JSON.parse(CARD_DATA);
let allDrawnCards = [];
let currentRoundCards = [];
let currentIndex = 0;

/* Gets a random card to display */
function getRandomCard () {
    let randIndex = Math.floor(Math.random() * CARDS_JSON.length);
    // reset the cards if all of them have been drawn
    if (allDrawnCards.length == CARDS_JSON.length) currentRoundCards = [];
    
    //if a card has already been draw choose another random card
    while (currentRoundCards.indexOf(randIndex) !== -1) randIndex = Math.floor(Math.random() * CARDS_JSON.length);
    
    allDrawnCards.push(randIndex);
    currentRoundCards.push(randIndex);
    currentIndex++;
    return CARDS_JSON[randIndex];
}

/* Gets the last card drawn */
export function prevCard() {
    console.log(`prevBtn\ncursor: ${currentIndex}\n`, allDrawnCards);

    // various consitions
    const isFirstCard = currentIndex === 0;

    // get the last card from the save var lastIndex because the indexes arr has just been reset
    if (isFirstCard) {
        alert("This is the first card");
        return CARDS_JSON[allDrawnCards[currentIndex]];
    } 
    else {
        currentIndex--;
        console.log(`cursor: ${currentIndex}\ngoing to `, CARDS_JSON[currentIndex])
        return CARDS_JSON[allDrawnCards[currentIndex]];
    }

}

/* Gets the next card */
export function nextCard() { 
    console.log(`nextBtn\ncursor: ${currentIndex}\n`, allDrawnCards);
    if (currentIndex !== (allDrawnCards.length - 1)) {
        currentIndex++;
        return CARDS_JSON[allDrawnCards[currentIndex]];
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