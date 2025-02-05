import Label from '@/app/features/game/components/Field/components/Label'
import { BOTS } from '@/app/features/game/Constants/bots'
import { selectCardsFlow } from '@/app/features/game/Store/selectors'
import { useAppSelector } from '@/app/features/game/Store/store'
import { PlayersNumber } from '@/app/features/game/types/players.type'
import getId from '@/app/features/game/utils/getId'
import { Direction,  } from '@/app/features/game/utils/types'
import React from 'react'

export default function ThirdBotLabel({direction}:{direction?:Direction}) {
    const state = useAppSelector(selectCardsFlow)
    if (!state) return;
    const {hands , currentPlayer} = state

    const players = hands.length as PlayersNumber
    if (players === 2) return;

    const {image,name} = BOTS[3]
    const id = getId(3,players)

    return (
        <Label
            labelInfos={{
                image,
                name,
                cardsNumber: hands[id].length ,
                timer : (id === currentPlayer && (state.gameStatus !== 'finished'))
            }}
            direction={direction}
        />
    )
}