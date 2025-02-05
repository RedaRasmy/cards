
import { Card } from "../types/cards.type"
import { PlayerId } from "../types/players.type"

export default function updateHands(
    hands:Card[][],
    handIndex:PlayerId,
    updateFn:(hand:Card[]) => Card[]
):Card[][]{
    return hands.map((hand,index)=>{
        if (index === handIndex) {
            return updateFn(hand)
        }
        return hand
    })

}
