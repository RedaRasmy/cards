
import isPlayable from "../../../utils/isPlayable"
import { Card,Requirements } from "../../../types/cards.type"

export default function getPlayableCards(cards:Card[],requ:Requirements) {
    const output:Card[] = []
    for (const card of cards){
        if (isPlayable(card,requ)){
            output.push(card)
        }
    }
    return output
}