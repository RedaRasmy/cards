import {motion} from 'motion/react'
import { ReactNode } from 'react'

export default function PlayerCardAnimationWrapper({
    children,
    index,
    cardsNumber
}:{
    children?:ReactNode,
    index: number
    cardsNumber:number
}) {
    // logic

    const middle = Math.floor(cardsNumber/2)
    const delay = Math.abs(index)/10
    const x = (50*(index-middle))
    const y = (  Math.abs(middle - index) * 10)
    const rotateZ = (index - middle) * 5

    return (
        <motion.div
        layoutId={index.toString()}
        key={index}
        whileHover={{
            scale:1.1
        }}
        initial={{
            x:-300,
            y:-300
        }}
        animate={{
            x,y,rotateZ
        }}
        transition={{delay ,duration:0.3}}
        >
            {children}
        </motion.div>
    )
}
