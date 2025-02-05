import { Card, Requirements } from "../types/cards.type"


export default function getRequirements(card:Card):Requirements {
    const output : Requirements = [card.color]

    if (typeof card.value === 'number') {
        output.push(card.value)
    }
    return output
}
