import CARD_DATA from "./cards"

// create a list of objects to store data about the various questions cards
const CARDS_JSON = JSON.parse(CARD_DATA);

/* Gets a random card to display */
export default function getRandomCard () {
    return CARDS_JSON[0];
}
