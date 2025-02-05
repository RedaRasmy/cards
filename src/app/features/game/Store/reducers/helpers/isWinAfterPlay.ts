
import { Card } from '../../../types/cards.type';
import isPlayable from '../../../utils/isPlayable';
import { FinishedGame, OngoingGame } from '../../types';

export default function isWinAfterPlay(
    state:OngoingGame,
    cardToPlay:Card
):FinishedGame|undefined {

    const isLastCard = state.hands[state.currentPlayer].length === 1
    const isGoodCard = isPlayable(cardToPlay,state.requirements)
    const isWin = isLastCard && isGoodCard;

    if (isWin) {
        return {
            ...state,
            currentCard: cardToPlay ,
            modalIsOpen: false,
            winner: state.currentPlayer,
            gameStatus: "finished",
            turns: [...state.turns,{
                cardPlayed:cardToPlay,
                action:'Play Card',
                player:state.currentPlayer
            }] , 
        } as FinishedGame;
    }
}
