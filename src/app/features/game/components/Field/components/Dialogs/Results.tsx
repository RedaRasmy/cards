
import { selectGameStatus, selectPlayersNumber, selectWinner } from "@/app/features/game/Store/selectors";
import { useAppSelector } from "@/app/features/game/Store/store";
import getPlayer from "@/app/features/game/utils/getPlayer";
import getPlayers from "@/app/features/game/utils/getPlayers";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import Label from "../Label";

export default function Results() {
    const winnerId = useAppSelector(selectWinner);

    const playersNumber = useAppSelector(selectPlayersNumber);

    const status = useAppSelector(selectGameStatus)
    const winner = winnerId ? getPlayer(winnerId) : undefined;
    const isWin = winnerId === 0

    const players = playersNumber ? getPlayers(playersNumber) : undefined

    if (status==='finished' ) return (
        <dialog 
        open
        id="my_modal_2" className="modal backdrop-blur-sm">
            <div className="modal-box glass space-y-4">
                    <div className="font-bold text-lg flex gap-4 justify-center items-center">
                    <Avatar className="size-[15%]" >
                        <AvatarImage src={players && players[0].image} className="rounded-full" alt="" />
                    </Avatar>
                    <h1 className="text-yellow-500 text-2xl tracking-wider ">
                        {
                            isWin ? 'YOU WIN !' : 'YOU LOSE !'
                        }
                    </h1>
                </div>
                <div className="-space-y-4 md:-space-y-0 sm:grid sm:grid-cols-2 items-center justify-center">
                    {
                    players?.map(player=>(
                        <div key={player.name} className="relative">
                            <Label 
                            labelInfos={{
                                name:player.name,
                                image:player.image,
                                cardsNumber:0,
                                timer:false
                            }} />
                            {
                                player.name === winner?.name && 
                                <p
                                className="absolute left-[60%] text-xl top-1/3 z-[999] 
                                font-bold rotate-45 text-yellow-600 opacity-70"
                                >Winner</p>
                            }
                        </div>
                    ))
                    }
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button></button>
            </form>
        </dialog>
    );
}
