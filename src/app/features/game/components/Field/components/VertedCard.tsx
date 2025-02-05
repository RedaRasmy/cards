import { CSSProperties } from "react";

export default function VertedCard({ style }: { style?: CSSProperties }) {
    // const {X,Y} = getStackPos()
    return (
        <div
            // initial={{x:X,y:Y}}
            // animate={{x:0,y:0}}
            style={style}
            className={`bg-card-back bg-cover bg-center box-border lg:w-[72px] lg:h-[104px] w-[54px] h-[78px]
            rounded-[4px] border-[3px] shadow-2xl shadow-black absolute z-[-1]
            border-black border-opacity-15  bg-cardBack
            `}
        ></div>
    );
}