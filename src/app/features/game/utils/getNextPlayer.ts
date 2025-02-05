import { PlayerId , PlayersNumber } from "../types/players.type"

export default function getNextPlayer(currentPlayer:PlayerId,playersNumber:PlayersNumber):PlayerId {
    if (currentPlayer === playersNumber-1) return 0
    return currentPlayer + 1 as PlayerId
}