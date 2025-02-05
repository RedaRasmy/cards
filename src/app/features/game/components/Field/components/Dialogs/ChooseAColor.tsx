
import useCard from "@/app/features/game/hooks/useCard";
import { selectModal } from "@/app/features/game/Store/selectors";
import { useAppSelector } from "@/app/features/game/Store/store";
import React from "react";

export default function ChooseAColor() {
    const  modalIsOpen  = useAppSelector(selectModal);
    const { chooseColor } = useCard();


    if (modalIsOpen) return (
        <dialog
            open
            className="shadow-xl absolute top-1/2 -translate-y-1/2  rounded-lg grid bg-transparent grid-cols-2 grid-rows-2 w-[300px] h-[300px] gap-2 z-50"
        >
            <div
                onClick={() => chooseColor("red")}
                className="bg-red-900  rounded-lg hover:scale-[1.1] cursor-pointer"
            />
            <div
                onClick={() => chooseColor("blue")}
                className="bg-blue-900 rounded-lg hover:scale-[1.1] cursor-pointer"
            />
            <div
                onClick={() => chooseColor("yellow")}
                className="bg-yellow-700 rounded-lg hover:scale-[1.1] cursor-pointer"
            />
            <div
                onClick={() => chooseColor("green")}
                className="bg-green-900 rounded-lg hover:scale-[1.1] cursor-pointer"
            />
        </dialog>
    );
}
