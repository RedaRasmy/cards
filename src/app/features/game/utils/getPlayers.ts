import { PlayerId, PlayersNumber } from "../types/players.type";
import getPlayer from "./getPlayer";

export default function getPlayers(playersNumber:PlayersNumber) {
    const players = []

    for (let i=0 ; i<playersNumber ; i++) {
        players.push(
            getPlayer(i as PlayerId)
        )
    }
    return players
}
