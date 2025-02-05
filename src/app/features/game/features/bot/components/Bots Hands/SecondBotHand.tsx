
import { useAppSelector } from '@/app/features/game/Store/store'
import getId from '@/app/features/game/utils/getId'
import React from 'react'
import BotHand from '../BotHand'
import { selectHands } from '@/app/features/game/Store/selectors'
import { PlayersNumber } from '@/app/features/game/types/players.type'

export default function SecondBotHand() {
    const hands = useAppSelector(selectHands)
    if (!hands) return;

    const players = hands.length as PlayersNumber
    if (players === 3) return;

    const id = getId(2,players)
    return (
        <BotHand
            cardsNumber={hands[id].length}
        />
    )
}