import { DIFFICULTY_OPTIONS } from "../Constants/gameOptions"
import { Card } from "./cards.type"
import {  PlayerId} from "./players.type"


export type Turn = {
    player : PlayerId ,
    action: 'Play Card',
    cardPlayed : Card
} | {
    player : PlayerId ,
    action: 'Draw Card',
    // We don't need to know the card drawn
}


export type Difficulty = typeof DIFFICULTY_OPTIONS[number]