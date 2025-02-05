
import { useAppSelector } from '@/app/features/game/Store/store'
import getId from '@/app/features/game/utils/getId'
import { PlayersNumber } from '@/app/features/game/types/players.type'
import React from 'react'
import BotHand from '../BotHand'
import { selectHands } from '@/app/features/game/Store/selectors'

export default function ThirdBotHand() {
    const hands = useAppSelector(selectHands)

    if (!hands) return;

    const players =hands.length as PlayersNumber
    if (players === 2) return; // the third bot don't exist on 2 players game

    const id = getId(3,players)

    return (
        <BotHand
            cardsNumber={hands[id].length}
        />
    )
}