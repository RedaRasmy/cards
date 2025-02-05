import { Card, Color, Deck, Hands } from "../../../types/cards.type";
import getNextPlayer from "../../../utils/getNextPlayer";
import isIdentical from "../../../utils/isIdentical";
import {  OngoingGame } from "../../types";


export default function botPlayWithJudge(
    state:OngoingGame,
    cardToPlay:Card,
    judgeColor:Color
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
            player: state.currentPlayer,
            cardToPlay
        }
    ]

    // next player
    const nextPlayer = getNextPlayer(
        state.currentPlayer,
        state.playersNumber
    )

    return {
        ...state,
        currentPlayer:nextPlayer,
        currentCard:cardToPlay,
        hands:newHands,
        deck:newDeck,
        turns: newTurns,
        requirements: [judgeColor]
    } as OngoingGame
}