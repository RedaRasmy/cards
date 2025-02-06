
import { CardsFlow, OngoingGame } from '../../types'
import { PayloadAction } from '@reduxjs/toolkit'
import { Card, Color } from '../../../types/cards.type'
import globalPlayCheck from './globalPlayCheck'
import playWithNormal from './playWithNormal'
import playWithSkip from './playWithSkip'
import playWithPlus3 from './playWithPlus3'
import playWithJudge from './playWithJudge'
import botPlayWithJudge from './botPlayWithJudge'

export default function handlePlay(
    state:CardsFlow,
    action:PayloadAction<{card:Card,botJudgeColor?:Color}>
) {
    const cardToPlay = action.payload.card
    const judgeColor = action.payload.botJudgeColor

    const check = globalPlayCheck(state,cardToPlay)
    if (check!==undefined) {
        return check
    }
    state = state as OngoingGame

    // if card is normal
    if (typeof cardToPlay.value === 'number') {
        return playWithNormal(state,cardToPlay)
    }
    else if (cardToPlay.value === 'Skip') {
        return playWithSkip(state,cardToPlay)
    }
    else if (cardToPlay.value === '+3') {
        return playWithPlus3(
            state as OngoingGame,
            cardToPlay
        )
    }
    // the difference between player and bot is only while play judge
    if (judgeColor) {
        return botPlayWithJudge(
            state,
            cardToPlay,
            judgeColor
        )
    } else {
        return playWithJudge(
            state as OngoingGame,
            cardToPlay
        )
    }
}
