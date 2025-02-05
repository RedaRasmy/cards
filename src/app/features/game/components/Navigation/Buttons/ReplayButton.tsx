import { RotateCcw } from 'lucide-react'
import React from 'react'
import useGameOptions from '../../../hooks/useGameOptions'
import { useAppSelector } from '../../../Store/store'
import { selectGameStatus } from '../../../Store/selectors'

export default function ReplayButton() {
    const {restartGame} = useGameOptions()
    const gameStatus = useAppSelector(selectGameStatus)

    if (gameStatus === 'finished') return (
        <RotateCcw 
        size={35} 
        onClick={restartGame}
        className="stroke-[2.5px] flex dark:text-white cursor-pointer" 
        />
    )
}
