import { Card } from "../types/cards.type"
import { PlayerId } from "../types/players.type"


export default function getWinner(hands:Card[][]):PlayerId{
    // this function should be used only onDrawingCard
    // with deck.length <= 1

    const map = hands.map((hand,i)=>[hand.length,i])
    const counts = hands.map(hand=>hand.length)
    const min = Math.min(...counts)

    for (let i=hands.length-1 ; i>=0 ; i--) {
        if (map[i][0] === min) {
            return map[i][1] as PlayerId
        }
    }
    return 0
}