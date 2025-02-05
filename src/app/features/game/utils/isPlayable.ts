import { Card, Requirements } from "../types/cards.type"


export default function isPlayable(card:Card,reference:Card|Requirements):boolean {
    if ('value' in reference) { // if the reference is a Card
        if (
            (card.color === reference.color)
            ||
            (
                (typeof card.value === "number")
                &&
                (card.value === reference.value)
            )
        ) {
            return true
        }
        // else
        return false
    }
    // if the reference is a Requirements

    if (card.color === reference[0]) {
        return true
    }
    

    if (
        (typeof card.value === 'number') &&
        (card.value === reference[1])
    ) {
        return true
    }

    return false
}