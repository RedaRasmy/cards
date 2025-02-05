import { Card, Requirements } from "../../../types/cards.type";
import { PlayersNumber } from "../../../types/players.type";
import isWinGuaranteed from "../utils/isWinGuaranteed";
import mediumBot from "./mediumBot";

export default function hardBot(
    playableCards:Card[],
    cards: Card[],
    playersNumber : PlayersNumber,
    PCN: number,
    requ: Requirements
) {
    const plus3Cards = playableCards.filter((card) => card.value === '+3');
    const judgeCards = playableCards.filter((card) => card.value === 'Judge');
    const skipCards = playableCards.filter((card) => card.value === 'Skip');

    const plus3Card = plus3Cards.length > 0 ? plus3Cards[0] : undefined
    const judgeCard = judgeCards.length > 0 ? judgeCards[0] : undefined
    const skipCard = skipCards.length > 0 ? skipCards[0] : undefined

    if (isWinGuaranteed(cards,playersNumber)) {
        if (skipCard) return skipCard
    }

    /// if player has 2 cards or less
    if (PCN < 3) {
        if (plus3Card) {
            return plus3Card;
        } else if (judgeCard) {
            return judgeCard;
        } else if (skipCard) {
            return skipCard;
        } else {
            // switch color by number
            const requiredNumber = requ[1];
            if (requiredNumber) {
                for (const card of playableCards) {
                    if (card.value === requiredNumber) {
                        return card;
                    } else {
                        return mediumBot(playableCards,cards)
                    }
                }
            } else {
                // if there is no number play as medium
                return mediumBot(playableCards,cards);
            }
        }
    }
    return mediumBot(playableCards,cards)
}
