import {
    selectGameStatus,
    selectPlayersNumber,
    selectWinner,
} from "@/app/features/game/Store/selectors";
import { useAppSelector } from "@/app/features/game/Store/store";
import getPlayer from "@/app/features/game/utils/getPlayer";
import getPlayers from "@/app/features/game/utils/getPlayers";
import React from "react";
import Message from "./Message";
import ResultsLabel from "./ResultsLabel";

export default function Results() {
    const winnerId = useAppSelector(selectWinner);

    const playersNumber = useAppSelector(selectPlayersNumber);

    const status = useAppSelector(selectGameStatus);
    const winner =
        winnerId && playersNumber
            ? getPlayer(winnerId, playersNumber)
            : undefined;
    const isWin = winnerId === 0;

    const players = playersNumber ? getPlayers(playersNumber) : undefined;

    if (status === "finished")
        return (
            <dialog open id="my_modal_2" className="modal backdrop-blur-sm">
                <div className="modal-box glass space-y-4">
                    <Message isWin={isWin} />
                    <div className="-space-y-4 md:-space-y-0 sm:grid sm:grid-cols-2 items-center justify-center">
                        {players?.map((player) => (
                            <ResultsLabel 
                            key={player.name} 
                            player={player}
                            isWinner={player.name === winner?.name}
                            />
                        ))}
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button></button>
                </form>
            </dialog>
        );
}
