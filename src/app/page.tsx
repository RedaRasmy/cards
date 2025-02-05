'use client'
import { useAppSelector } from "@/app/features/game/Store/store";
import Game from "./features/game/components/Game";
import LoadingPage from "./features/game/components/LoadingPage";
import IconsContainer from "./features/game/components/Navigation/IconsContainer";
import { selectIsDark } from "@/app/features/game/Store/slices/settings";
// import useLoading from "./features/game/hooks/useLoading";
// import loadImage from "./features/game/utils/loadImage";

export default function Home() {
    // const { loading , progress } = useLoading([
    //     loadImage("/images/cardback.png"),
    //     loadImage("/images/default-avatar.png"),
    //     loadImage("/images/dog1.png"),
    //     loadImage("/images/dog2.png"),
    //     loadImage("/images/dog3.png"),
    // ]);
    const loading = false;
    const progress = 0;
    const isDark = useAppSelector(selectIsDark)
    return (
        <div className={`${isDark && "dark"}`}>
            <div className="w-full dark:bg-black bg-slate-400  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-slate-300 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <IconsContainer />
                {loading ? <LoadingPage progress={progress} /> : <Game />}
            </div>
        </div>
    );
}
