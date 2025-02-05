import { BOTS } from "../Constants/bots";
import { PLAYER } from "../Constants/player";
import { PlayerId } from "../types/players.type";

export default function getPlayer(playerId:PlayerId) {
    if (playerId === 0) return PLAYER
    
    return BOTS[playerId]
}
