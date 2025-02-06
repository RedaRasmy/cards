import { PLAYER } from "@/app/features/game/Constants/player";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

export default function Message({isWin}:{
    isWin: boolean
}) {
    return (
        <div className="font-bold text-lg flex gap-4 justify-center items-center">
            <Avatar className="size-[15%]">
                <AvatarImage
                    src={PLAYER.image}
                    className="rounded-full"
                    alt=""
                />
            </Avatar>
            <h1 className="text-yellow-500 text-2xl tracking-wider ">
                {isWin ? "YOU WIN !" : "YOU LOSE !"}
            </h1>
        </div>
    );
}
