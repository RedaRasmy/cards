
import { CircleOff } from "lucide-react";
import type { Power } from "../../types/cards.type";
import Judge from "./Judge";

export default function Powers({ power }: { power: Power | undefined }) {
    if (power === "Judge") return <Judge />;
    if (power === "Skip")
        return (
            <CircleOff className="size-[90%] stroke-[2.4px] opacity-70"/>
        );
        if (power === "+3")
        return (
            <h1 className="font-bold text-[3.5vw] portrait:text-[3.5vh] text-black  text-opacity-50 -rotate-3 select-none">
                +3
            </h1>
        );
}