import { Card } from "../../../types/cards.type"
import { PlayersNumber } from "../../../types/players.type"

export default function isWinGuaranteed(
    botCards: Card[],
    playersNumber:PlayersNumber
):boolean {
    if (botCards.length > 2) return false
    if (playersNumber !== 2) return false

    for (const card of botCards) {
        if (card.value === 'Skip') {
            return true
        }
    }
    return false
}