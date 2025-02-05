import { Card, Deck, Hands } from "../../../types/cards.type";
import getNextPlayer from "../../../utils/getNextPlayer";
import getRequirements from "../../../utils/getRequirements";
import isIdentical from "../../../utils/isIdentical";
import { OngoingGame } from "../../types";

export default function playWithPlus3(
    state :OngoingGame,
    cardToPlay:Card
) {
    // newCurrentCard is cardToPlay

    // get next player 
    const nextPlayer  = getNextPlayer(state.currentPlayer,state.playersNumber)

    // get new Hands 
    const newHands:Hands = state.hands.map((hand,index)=> {
        if (index === state.currentPlayer) {
            return hand.filter(card=>!isIdentical(card,cardToPlay))
        }
        else if (index === nextPlayer) {
            return [...hand,...state.deck.slice(-3)]
        }
        return hand
    })

    // get new Deck 
    const newDeck:Deck = [state.currentCard,...state.deck.slice(0,-3)]

    // get new requ
    const newRequ = getRequirements(cardToPlay)

    // Add turn
    const newTurns = [...state.turns,
        {
            action: "Play Card",
            player: state.currentCard,
            cardToPlay
        }
    ]

    return {
        ...state,
        currentCard : cardToPlay,
        currentPlayer: nextPlayer,
        hands: newHands,
        deck : newDeck,
        requirements : newRequ,
        turns: newTurns
    } as OngoingGame

}
