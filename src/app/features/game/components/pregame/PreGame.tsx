
import OptionsGroup from "./OptionsGroup";
import { DIFFICULTY_OPTIONS, PLAYERS_OPTIONS } from "../../Constants/gameOptions";
import useGameOptions from "../../hooks/useGameOptions";
import StartButton from "./StartButton";
import { PlayersNumber } from "../../types/players.type";
import { Difficulty } from "../../types/game.type";

export default function PreGame() {
    const {
        difficulty,
        playersNumber,
        onChangeDifficulty,
        onChangePlayersNumber,
        startGame
    } = useGameOptions()

    return (
        <div className="flex flex-row gap-5 items-center justify-around h-[100dvh]
        lg:flex-col lg:justify-center portrait:flex-col portrait:justify-center
        ">
            <div
                className="p-10 rounded-lg shadow-md flex flex-col
                items-center justify-center glass border-black border-2
                lg:flex-row space-y-4 lg:space-y-0 lg:justify-center lg:items-center lg:space-x-4 w-[min(90%,400px)]" 
            >
                <OptionsGroup<typeof DIFFICULTY_OPTIONS>
                    title="Difficulty"
                    options={DIFFICULTY_OPTIONS}
                    defaultValue={difficulty}
                    onChange={(e) => onChangeDifficulty(e as Difficulty)}
                />
                <OptionsGroup<typeof PLAYERS_OPTIONS>
                    title="Players Number"
                    options={PLAYERS_OPTIONS.map(op=>`${op} players`)}
                    defaultValue={String(playersNumber)+' players'}
                    onChange={(e) =>
                        onChangePlayersNumber(
                            Number(e.charAt(0)) as PlayersNumber
                        )
                    }
                />
            </div>
            <StartButton onClick={startGame} >Start</StartButton>
        </div>
    );
}
