
import { BotsLabels, Middle, MiddleName,  TopCorner } from "./components/containers";
import SecondBotLabel from "@/app/features/game/features/bot/components/Bots Labels/SecondBotLabel";
import FirstBotLabel from "@/app/features/game/features/bot/components/Bots Labels/FirstBotLabel";
import ThirdBotLabel from "@/app/features/game/features/bot/components/Bots Labels/ThirdBotLabel";
import ThirdBotHand from "@/app/features/game/features/bot/components/Bots Hands/ThirdBotHand";
import FirstBotHand from "@/app/features/game/features/bot/components/Bots Hands/FirstBotHand";
import SecondBotHand from "@/app/features/game/features/bot/components/Bots Hands/SecondBotHand";
import useTimer from "@/app/features/game/hooks/useTimer";
import useBot from "@/app/features/game/features/bot/hooks/useBot";


export default function Top() {
    useTimer()
    useBot()
    return (
        <div
        className={`landscape:grid landscape:grid-cols-3 landscape:gap-5 flex`}
        >
            <TopCorner position="left">
                <ThirdBotHand/>
            </TopCorner>
            <Middle>
                <SecondBotHand/>
                <MiddleName>
                    <SecondBotLabel direction="top" />
                </MiddleName>
                {/* these BotsLabels is hidden on landscape */}
                <BotsLabels>
                    <FirstBotLabel  direction="left"/>
                    <SecondBotLabel direction="left"/>
                    <ThirdBotLabel direction="left"/>
                </BotsLabels>
            </Middle>
            <TopCorner position="right">
                <FirstBotHand/>
            </TopCorner>
        </div>
    )
}
