
import ThirdBotLabel from "@/app/features/game/features/bot/components/Bots Labels/ThirdBotLabel";
import { Center,  RequirementsContainer,  Side, StackContainer, Table } from "./components/containers";
import CurrentCard from "./components/CurrentCard";
import Requirements from "./components/Requirements";
import Stack from "./components/Stack";
import FirstBotLabel from "@/app/features/game/features/bot/components/Bots Labels/FirstBotLabel";

export default function Middle() {
    return (
        <div
        className={`grid landscape:grid-cols-[30%,40%,30%] `}
        >
            <Side>
                <ThirdBotLabel direction="left"/>
            </Side>
            <Table>
                <StackContainer>
                    <Stack/>
                </StackContainer>
                <Center>
                    <RequirementsContainer position="middle">
                        <Requirements/>
                    </RequirementsContainer>
                    <CurrentCard/>
                </Center>
                <RequirementsContainer position="right">
                        <Requirements/>
                </RequirementsContainer>
            </Table>
            <Side>
                <FirstBotLabel direction="right" />
            </Side>
        </div>
    )
}
