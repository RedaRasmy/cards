
import Card from "../../../../Card/Card";
import type { Card as CardType } from "@/app/features/game/types/cards.type";
import { useMemo } from "react";

export default function Hand({cards}:{cards:CardType[]}) {
    const hand = useMemo(()=>cards,[cards])

    return (
        <div
        className=" max-w-[90%] w-full flex -m-5 leading-none
        -space-x-[2vw] portrait:-space-x-[2vh]  justify-center items-center flex-wrap"
    >
        {hand.map((card,) => (
            <Card
                key={card.color+card.value}
                card={card}
            />
        ))}
        </div>
    )
}
