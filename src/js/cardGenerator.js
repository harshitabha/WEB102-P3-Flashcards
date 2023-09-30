import CARD_DATA from "./cards"

// create a list of objects to store data about the various questions cards
const CARDS_JSON = JSON.parse(CARD_DATA);
let indexesDrawn = [];
let lastIndex;
let currentIndex;

/* Gets a random card to display */
function getRandomCard () {
    let randIndex = Math.floor(Math.random() * CARDS_JSON.length);
    // reset the cards if all of them have been drawn
    if (indexesDrawn.length == CARDS_JSON.length) {
        lastIndex = indexesDrawn[-1];
        indexesDrawn = [];
    }
    //if a card has already been draw choose another random card
    while (randIndex in indexesDrawn) randIndex = Math.floor(Math.random() * CARDS_JSON.length);
    
    indexesDrawn.push(randIndex);
    currentIndex = randIndex;
    return CARDS_JSON[randIndex];
}

/* Gets the last card drawn */
export function prevCard() {
    const indexInDarwnArr = indexesDrawn.indexOf(currentIndex);

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
        currentIndex = indexesDrawn[indexInDarwnArr - 1];
        return CARDS_JSON[currentIndex];
    }

}

/* Gets the next card */
export function nextCard() { 
    const indexInDarwnArr = indexesDrawn.indexOf(currentIndex);

    if (indexInDarwnArr !== (indexesDrawn.length - 1)) {
        currentIndex = indexesDrawn[indexInDarwnArr + 1];
        return CARDS_JSON[currentIndex];
    } else {
        return getRandomCard();
    }

}

// Return the first card
export function firstCard() { 
    if (indexesDrawn.indexOf(0) === -1) {
        indexesDrawn.push(0);
        currentIndex = 0;
    }
    return CARDS_JSON[0]; 
}