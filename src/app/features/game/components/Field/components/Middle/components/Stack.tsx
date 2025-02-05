import useCard from "@/app/features/game/hooks/useCard";
import { selectCurrentPlayer, selectDeck } from "@/app/features/game/Store/selectors";
import { useAppSelector } from "@/app/features/game/Store/store";
// import getStackPos from "@/library/functions/getStackPos"

export default function Stack() {
    const { draw } = useCard();
    const deck = useAppSelector(selectDeck)
    const currentPlayer = useAppSelector(selectCurrentPlayer)
    
    function handleTake() {
        if (currentPlayer===0) {
            draw()
        }
    }
    if (deck && deck.length > 0 )
        return (
            <div
                id="stack"
                onClick={handleTake}
                // initial={{ y: -500, x: -500 }}
                // animate={{
                //     y: 0,
                //     x: 0,
                // }}
                className={`bg-card-back bg-cover bg-center box-border lg:w-[72px] lg:h-[104px] w-[54px] h-[78px]
        rounded-[4px] border-[3px] shadow-2xl shadow-black bg-cardBack
        border-black border-opacity-15 touch-manipulation cursor-pointer
        `}
            ></div>
        );
}
