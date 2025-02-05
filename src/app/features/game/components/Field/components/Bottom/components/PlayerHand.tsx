import { useMemo } from "react";
import { useAppSelector } from "@/app/features/game/Store/store";
import Hand from "./Hand";
import split from "@/app/features/game/utils/split";
import { selectPlayerHand } from "@/app/features/game/Store/selectors";

export default function PlayerHand() {
    const hand = useAppSelector(selectPlayerHand);

    const memoizedHand = useMemo(() => hand, [hand]);

    if (!memoizedHand) return null;

    // const cardsNumber = memoizedHand.length;
    // const isSplit = cardsNumber > 9;
    const isSplit = false
    const rows = isSplit ? split(memoizedHand) : [memoizedHand];

    return (
        <div className="flex justify-center items-center w-full">
            {isSplit && <Hand cards={rows[1]} />}
            <Hand cards={rows[0]} />
        </div>
    );
}
