
import { useAppSelector } from '@/app/features/game/Store/store'
import getId from '@/app/features/game/utils/getId'
import React from 'react'
import BotHand from '../BotHand'
import { selectCardsFlow } from '@/app/features/game/Store/selectors'
import { PlayersNumber } from '@/app/features/game/types/players.type'

export default function FirstBotHand() {
    const state = useAppSelector(selectCardsFlow)
    if (!state) return;
    const {hands } = state

    const players = hands.length as PlayersNumber
    if (players === 2) return;

    const id = getId(1,players)
    return (
        <BotHand
            cardsNumber={hands[id].length}
        />
    )
}

