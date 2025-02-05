
import { selectGameStatus } from "../../Store/selectors";
import { useAppSelector } from "../../Store/store";
// import DarkModeToggle from "./Buttons/DarkModeToggle";
import ExitButton from "./Buttons/ExitButton";
import FullScreenToggle from "./Buttons/FullScreenToggle";
import ReplayButton from "./Buttons/ReplayButton";
// import SoundButton from "./Buttons/SoundButton";

export default function IconsContainer() {
    const gameStatus = useAppSelector(selectGameStatus);

    if (gameStatus)
        // on game
        return (
            <div className="absolute gap-2 z-50 flex flex-col justify-center items-center right-2 top-2">
                {/* <Settings size={35}/> */}
                <FullScreenToggle/>
                <ExitButton/>
                {/* <SoundButton size={40} /> */}
                {/* <DarkModeToggle /> */}
                <ReplayButton/>
            </div>
        );
    // in pregame
    return (
        <div className="absolute gap-2 z-50 flex flex-col justify-center items-center right-2 top-2">
            <FullScreenToggle/>
            {/* <DarkModeToggle/> */}
        </div>
    );
}
