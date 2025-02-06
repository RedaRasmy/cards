// import { 
//     FOUR_PLAYERS,
//     THREE_PLAYERS,
//     TWO_PLAYERS 
// } from "../Constants/players"

export type PlayersNumber = 2 | 3 | 4


// export type Players<P extends PlayersNumber> = (
//     P extends 2 ? typeof TWO_PLAYERS :
//     P extends 3 ? typeof THREE_PLAYERS :
//     typeof FOUR_PLAYERS
// )

export type PlayerId = 0 | 1 | 2 | 3

export type Player = {
    name:string,
    image:string
}

