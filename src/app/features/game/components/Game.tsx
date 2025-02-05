import { selectGameStatus } from "../Store/selectors";
import { useAppSelector } from "../Store/store";
import Field from "./Field/Field";
import PreGame from "./pregame/PreGame";


export default function Game() {
    const isPreGame = useAppSelector(selectGameStatus) === undefined
    return (
        <div className="w-full h-[100dvh]">
            {isPreGame ? <PreGame /> : <Field />}
        </div>
    )
}
