
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
        console.log('state is idle or game finished')
        return state
    }

    // check if the card is playable 
    if (!isPlayable(cardToPlay, state.requirements)) {
        console.log('not playable')
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
        console.log('win')
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
