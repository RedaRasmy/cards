import { Card } from "../../../types/cards.type";

export default function easyBot(playableCards:Card[]):Card|undefined {

    const takeRate = Math.random() < 0.3; 
    // 30% he will draw card (return undefined)
    if (!takeRate) {
        return playableCards[0];
    }
    return;
}
