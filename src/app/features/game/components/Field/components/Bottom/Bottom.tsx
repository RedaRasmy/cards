
import { PlayerLableContainer } from "./components/containers";
import PlayerHand from "./components/PlayerHand";
import PlayerLabel from "./components/PlayerLabel";


export default function Bottom() {
    return (
        <div
        className="
            flex justify-center items-center 
            relative 
            "
        >
            <PlayerLableContainer>
                <PlayerLabel/>
            </PlayerLableContainer>
            <PlayerHand/>
        </div>
    )
}
