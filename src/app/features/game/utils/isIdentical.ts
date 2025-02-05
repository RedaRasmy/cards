import { Card } from "../types/cards.type"



export default function isIdentical(card1:Card,card2:Card):boolean {
    if (
        (card1.color === card2.color) // same color
        && // AND
        (card1.value === card2.value) // same value
    ) {
        return true
    }
    // else
    return false
}