import { Deck, Hands } from "../types/cards.type";
import { Card,  Requirements, } from "../types/cards.type";
import { Turn  } from "../types/game.type";
import { PlayerId,PlayersNumber } from "../types/players.type";


export type GameStatus = 
    | 'idle' 
    | 'ongoing'
    | 'finished';


export type OngoingGame = {
    // while game (ongoing)
    currentCard: Card,
    hands: Hands,
    deck: Deck,
    currentPlayer: PlayerId,
    requirements: Requirements,
    modalIsOpen: boolean,
    winner: undefined,
    gameStatus: Extract<GameStatus, "ongoing">,
    turns: Turn[],
    playersNumber: Readonly<PlayersNumber>
}
export type FinishedGame = {
    // after game (finished) , u can't change states until replay/exit->start
    currentCard: Readonly<Card>,
    hands: Readonly<Hands>,
    deck: Readonly<Deck>,
    currentPlayer: Readonly<PlayerId>,
    requirements: Readonly<Requirements>,
    modalIsOpen: false,
    winner: Readonly<PlayerId>,
    gameStatus: Extract<GameStatus,"finished">,
    turns: Readonly<Turn[]>,
    playersNumber: Readonly<PlayersNumber>
}

export type CardsFlow = OngoingGame | FinishedGame | 'idle'



