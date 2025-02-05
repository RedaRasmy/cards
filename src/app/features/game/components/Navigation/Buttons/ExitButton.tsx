import { LogOut } from 'lucide-react'
import useGameOptions from '../../../hooks/useGameOptions'


export default function ExitButton() {
    const {exitGame} = useGameOptions()
    return (
        <LogOut 
        onClick={exitGame}
        size={35} 
        className="stroke-[2.5px] dark:text-white cursor-pointer" 
        />
    )
}
