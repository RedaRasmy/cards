import { Player } from "@/app/features/game/types/players.type";
import React from "react";
import Label from "../../Label";

export default function ResultsLabel({
    player,
    isWinner,
}: {
    player: Player;
    isWinner: boolean;
}) {
    return (
        <div key={player.name} className="relative">
            <Label
                labelInfos={{
                    name: player.name,
                    image: player.image,
                    cardsNumber: 0,
                    timer: false,
                }}
            />
            {isWinner && (
                <p
                    className="absolute left-[60%] text-xl top-1/3 z-[999] 
                    font-bold rotate-45 text-yellow-600 opacity-70"
                >
                    Winner
                </p>
            )}
        </div>
    );
}
