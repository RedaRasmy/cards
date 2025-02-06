import { Player, PlayerId, PlayersNumber } from "../types/players.type";
import getPlayer from "./getPlayer";

export default function getPlayers(playersNumber:PlayersNumber):Player[] {
    const players = []

    for (let i=0 ; i<playersNumber ; i++) {
        players.push(
            getPlayer(i as PlayerId ,playersNumber)
        )
    }
    return players
}
