
import { ReactNode } from "react"


///////////// SECOND ROW

export function Side({children}:{children?:ReactNode}) {
    return (
        <div className="flex justify-center items-start portrait:hidden ">
            {children}
        </div>
    )
}
export function Table({children}:{children?:ReactNode}) {
    return (
        <div 
        className={`grid landscape:grid-cols-[30%,40%,30%] portrait:grid-cols-[40%,60%]`}
        >
            {children}
        </div>
    )
}
export function StackContainer({children}:{children?:ReactNode}) {
    return (
        <div className="flex justify-center items-center">
            {children}
        </div>
    )
}


export function Center({children}:{children?:ReactNode}) {
    return (
        <div className="grid portrait:grid-rows-[20%,60%,20%] ">
            {children}
        </div>
    )
}

export function RequirementsContainer({children,position}:{
    children?:ReactNode,
    position : 'middle' | 'right'
}) {
    const style = position === 'middle' 
        ? 'landscape:hidden'
        : 'portrait:hidden'
    return (
        <div className={`flex justify-center items-center ${style}`}>
            {children}
        </div>
    )
}
