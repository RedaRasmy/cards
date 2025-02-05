
import getNextPlayer from "../../utils/getNextPlayer"
import getWinner from "../../utils/getWinner"

import updateHands from "../../utils/updateHands"
import { FinishedGame, OngoingGame } from "../types"

export default function draw(
    state:OngoingGame
) {
    const {currentPlayer,deck,hands,turns,playersNumber} = state
    
    
    // finish game if there is only 1 card in deck
    if ( deck.length <= 1 ) return {
        ...state,
        currentCard:state.currentCard,
        winner:getWinner(hands),
        gameStatus:'finished',
        modalIsOpen:false,
        requirements:state.requirements,
    } as FinishedGame
    
    // get new Deck
    const newDeck = deck.slice(0,-1)
    
    // Add the card to player's hand
    const newHands = updateHands(
        hands , currentPlayer,
        (hand) => [...hand,
            deck[deck.length-1]
        ]
    )
    
    // get next player 
    const nextPlayer = getNextPlayer(
        currentPlayer,
        playersNumber
    )

    // Add turn
    const newTurns = [...turns,
        {
            action: "Draw Card",
            player: currentPlayer
        }
    ]

    // update state
    return {
        ...state,
        currentPlayer : nextPlayer ,
        deck: newDeck,
        hands: newHands,
        turns: newTurns
    } as OngoingGame
}
