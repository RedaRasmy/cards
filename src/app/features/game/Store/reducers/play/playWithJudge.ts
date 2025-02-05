import { Card, Deck, Hands } from "../../../types/cards.type";
import isIdentical from "../../../utils/isIdentical";
import {  OngoingGame } from "../../types";


export default function playWithJudge(
    state:OngoingGame,
    cardToPlay:Card
):OngoingGame {

    // get new Hands 
    const newHands:Hands = state.hands.map((hand,index)=> {
        if (index === state.currentPlayer) {
            return hand.filter(card=>!isIdentical(card,cardToPlay))
        }
        return hand
    })

    // get new Deck 
    const newDeck:Deck = [state.currentCard,...state.deck]

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
        currentCard:cardToPlay,
        hands:newHands,
        deck:newDeck,
        modalIsOpen:true,
        turns: newTurns
    } as OngoingGame
}
