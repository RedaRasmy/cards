import React from 'react'
import CardDesign from '../../../../Card/CardDesign'
import { useAppSelector } from '@/app/features/game/Store/store'
import { selectCurrentCard } from '@/app/features/game/Store/selectors'

export default function CurrentCard() {
    const currentCard = useAppSelector(selectCurrentCard)

    if (currentCard) return (
        <div className="flex justify-center items-center ">
            <CardDesign card={currentCard} className='scale-[2]' />
        </div>
    )
}
