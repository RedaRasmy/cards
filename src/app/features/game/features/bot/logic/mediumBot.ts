import { Card } from "../../../types/cards.type";
import { mostColorRepeated } from "../utils/mostColorRepeated";

export default function mediumBot(playableCards:Card[],cards:Card[]) {
    
    const bestColor = mostColorRepeated(cards)
    /// return random card with the best color
    for (const card of playableCards) {
        if (card.color === bestColor) {
            return card;
        }
    }
}
