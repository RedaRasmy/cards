
import { COLORS_CLASSES } from "../../Constants/cards";
import { Card } from "../../types/cards.type";

import Number from "./Number";
import Powers from "./Powers";

export default function CardDesign({
    card,
    className,
}: {
    card: Card;
    className?: string;
}) {
    const { value , color } = card;

    const backgroundColor = COLORS_CLASSES[color];

    return (
        <div
            className={` ${className}
                ${backgroundColor}  p-[2px] shadow-md relative
                w-[5vw] h-[7.22vw] portrait:w-[5vh] portrait:h-[7.22vh]
                rounded-[0.25vw] portrait:rounded-[0.25vh] flex justify-center items-center flex-col 
                shadow-slate-800 border-[0.2vw] portrait:border-[0.1vh] border-black border-opacity-15 shrink-0
            `}
        >
            {
                typeof value === 'number' 
                    ? <Number number={value} />
                    : <Powers power={value} />
            }
            <div />
        </div>
    );
}






