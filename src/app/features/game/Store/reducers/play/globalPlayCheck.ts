
import isPlayable from "../../../utils/isPlayable"
import { Card, Hands } from "../../../types/cards.type"
import { CardsFlow, FinishedGame } from "../../types"
import isIdentical from "../../../utils/isIdentical"

export default function globalPlayCheck(
    state:CardsFlow,
    cardToPlay:Card
) {
    // check if game is ongoing
    if (state === "idle" || state.gameStatus === 'finished') {
        return state
    }

    // check if the card is playable 
    if (!isPlayable(cardToPlay, state.requirements)) {
        return state
    }

    // check if win 
    const isLastCard = state.hands[
        state.currentPlayer
    ].length === 1

    const newHands:Hands = state.hands.map((hand,index)=> {
        if (index === state.currentPlayer) {
            return hand.filter(card=>!isIdentical(card,cardToPlay))
        }
        return hand
    })

    if (isLastCard) {
        return {
            ...state,
            currentCard: cardToPlay ,
            modalIsOpen: false,
            winner: state.currentPlayer,
            gameStatus: "finished",
            hands:newHands,
            turns: [...state.turns,{
                cardPlayed:cardToPlay,
                action:'Play Card',
                player:state.currentPlayer
            }] , 
        } as FinishedGame;
    }
}
