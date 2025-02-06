import { BOTS } from "../Constants/bots";
import { PLAYER } from "../Constants/player";
import { Player, PlayerId, PlayersNumber } from "../types/players.type";
import { getBotId } from "./getId";

export default function getPlayer(playerId:PlayerId,playersNumber:PlayersNumber):Player {
    if (playerId === 0) return PLAYER
    
    const id = getBotId(playerId,playersNumber) 

    return BOTS[id]
}
