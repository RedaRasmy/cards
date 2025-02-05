
import { ReactNode } from "react";

///////////// FIRST ROW
export function TopCorner({ children ,position}: 
    { 
        children?: ReactNode 
        position: 'right' | 'left'
    }) {

    const style = position === 'left' 
        ?'origin-bottom-left -rotate-[40deg] xl:-rotate-[50deg]' 
        :'origin-bottom-right rotate-[40deg] xl:rotate-[50deg]'
    // visible only in landscape
    return (
    <div className={
        `translate-y-[15%] portrait:hidden scale-y-[-1] 
        flex justify-center items-center
        p-[3vw] ${style}
    `}>
        {children}
    </div>
    );
}


export function Middle({ children }: { children?: ReactNode }) {
    return (
        <div 
        className={`
            landscape:translate-y-[10%] landscape:rotate-[180deg] landscape:justify-center landscape:relative 
            portrait:w-full portrait:px-[3vw] portrait:py-[2vw]
            flex landscape:items-center 
            `}>
        {children}
    </div>
    );
}

export function MiddleName({ children }: { children?: ReactNode }) {
    return (
    <div className="rotate-180 portrait:hidden absolute top-[5vh] left-0 flex flex-col justify-center items-center">
        {children}
    </div>
    );
}
export function BotsLabels({ children }: { children?: ReactNode }) {
    return (
    <div className="flex landscape:hidden flex-col justify-center items-center -space-y-3">
        {children}
    </div>
    );
}

