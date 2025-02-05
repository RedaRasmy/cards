import { selectCardsFlow } from '@/app/features/game/Store/selectors'
import Label from '../../Label'
import { useAppSelector } from '@/app/features/game/Store/store'
import React from 'react'

export default function PlayerLabel() {
    const state = useAppSelector(selectCardsFlow)

    if (!state) return;
    const {hands,currentPlayer} = state

    return (
        <Label
            labelInfos={{
                image:'/images/default-avatar.png',
                name : 'Player',
                cardsNumber: hands[0].length ,
                timer : (0 === currentPlayer && (state.gameStatus !== 'finished'))
            }}
            direction='bottom'
        />
    )
}