import { Card,Color } from "../../../types/cards.type"

export function mostColorRepeated(cards: Card[]):Color|undefined {
    const counts = new Map<Color,number>()
    

    for (const card of cards) {
        if (counts.has(card.color)) {
            counts.set(card.color, counts.get(card.color)! +1 )
        } else {
            counts.set(card.color , 1)
        }
    }
    const max = Math.max(...Array.from(counts.values()))

    for (const [key,value] of counts ) {
        if (value === max) {
            return key
        }
    }
}
