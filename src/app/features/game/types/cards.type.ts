
import {  COLORS, NUMBERS, POWERS } from "../Constants/cards"


// Mini Types Used In Card Type
export type Color = typeof COLORS[number]
export type CardNumber =  typeof NUMBERS[number]
export type Power = typeof POWERS[number]
export type Value = Power | CardNumber


export type Card = {
    color: Color
    value : Value
} 

export type Requirements = [
    Color,
    CardNumber?
]

// ishould restruct these with a range
export type Hand = Card[]
export type Deck = Card[]
export type Hands = Hand[]

// export type Hands = (
//     {
//         [P in typeof TWO_PLAYERS[number]]:Hand
//     } | {
//         [P in typeof THREE_PLAYERS[number]]:Hand
//     } | {
//         [P in typeof FOUR_PLAYERS[number]]:Hand
//     }
// )
