import { CARDS } from "../Constants/cards";
import shuffle from "./shuffle";
import { PlayersNumber } from "../types/players.type";
import { Hands } from "../types/cards.type";


export default function Distribute(playersNumber: PlayersNumber) {
    // Shuffle 
    const cards = shuffle(CARDS);

    // Assign the current card
    const currentCard = cards[0];

    // Distribute hands, each player gets 4 cards
    const hands = Array.from(
        { length: playersNumber },
        (_, index) => {
        const start = (index * 4) + 1;
        const end = start + 4;
        return cards.slice(start, end);
    }) as Hands

    // Calculate the remaining deck
    const deck = cards.slice(1 + (playersNumber * 4));

    return {
        currentCard,
        hands,
        deck,
    };
}
