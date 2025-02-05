
import CardDesign from "./CardDesign";
import useCard from "../../hooks/useCard";
import type { Card } from "../../types/cards.type";
import {v4} from 'uuid'

export default function Card({
    card,
    className,
}: {
    card: Card;
    className?: string;
}) {
    const { playerPlayCard } = useCard();



    const id = v4()

    return (
        <div
            key={id}
            onClick={()=>playerPlayCard(card)}
            //  absolute left-1/2 top-1/2 
            className={`
                ${className} 
                cursor-pointer z-50 hover:z-[100] -mt-[3vh]
                rounded-md hover:border-2 border-green-600
            `}
        >
            <CardDesign card={card} />
        </div>
    )
}

