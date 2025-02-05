import { PlayerId, PlayersNumber } from "../types/players.type"


export default function getId(
    botId: 1 | 2 | 3,
    players : PlayersNumber
): PlayerId {

    if (botId === 1) {
        return 1
    } else if (botId === 2) {
        if (players === 2) {
            return 1
        }
        return 2
    } else {
        if (players === 3) {
            return 2
        } else return 3
    }
}
