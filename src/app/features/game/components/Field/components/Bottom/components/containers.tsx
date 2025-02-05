import { ReactNode } from "react"

///////////// THIRD ROW
// export function ThirdCorner({children}:{children?:ReactNode}) {
//     return (
//         <div className=" p-5">
//             {children}
//         </div>
//     )
// }
// export function Player({children}:{children?:ReactNode}) {
//     return (
//         <div className="relative flex justify-center items-center">
//             {children}
//         </div>
//     )
// }

export function PlayerLableContainer({children}:{children?:ReactNode}) {
    return (
        <div className="absolute top-[-10vh] right-[1vw]">
            {children}
        </div>
    )
}

