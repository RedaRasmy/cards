import { COLORS_CLASSES } from '@/app/features/game/Constants/cards'
import { selectCardsFlow } from '@/app/features/game/Store/selectors'
import { useAppSelector } from '@/app/features/game/Store/store'
import { Color } from '@/app/features/game/types/cards.type'

import React from 'react'

export default function Requirements() {
    const state = useAppSelector(selectCardsFlow)
    if (!state) return;
    const {requirements,currentCard} = state

    return (
    <div className='flex gap-4 justify-center items-center'>
        { (currentCard?.value === 'Judge') &&
        <>
            <p className='capitalize dark:text-white'>{requirements[0]}</p>
            <ColorSquare color={requirements[0]}/>
        </>
        }
    </div>
    )
}

function ColorSquare({color}:{color:Color}) {
    return (
        <p
            className={`${COLORS_CLASSES[color]} size-5 rounded-full`}
        />
    )
}
