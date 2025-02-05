
import { motion } from "motion/react";
import Image from "next/image";
import getInitialPos from "../../../utils/getInitialPos";
import { Coordinates, Direction,  LabelInfos} from "../../../utils/types";
import { Avatar,  AvatarImage } from "@/components/ui/avatar";

export default function Label({
        className,
        direction,
        labelInfos
    }: {
        className?: string;
        direction?: Direction;
        labelInfos:LabelInfos
    }
) {

    const {image,name,cardsNumber,timer} = labelInfos 
    const initial:Coordinates = direction ? getInitialPos(direction) : {x:0,y:0}
    const timerClass = timer ? "timer" : "";
    

    return (
        <motion.div
        initial={initial}
        animate={{ x: 0, y: 0 }}
        // transition={{duration:1}}
        className={`${className}  justify-center items-center 
        w-[15rem]  relative z-[150]
        `}
        >
            <Image 
            alt="" 
            src={'/images/cadre.png'}
            style={{
                height:'auto',
                width:'100%'
            }}
            width={1440} height={557}
            />
            <div
            className={`${timerClass} absolute top-[37%] left-[9.2%] size-[2.5rem]  
            bg-black rounded-full flex justify-center items-center `}>
                <Avatar className="size-[90%]">
                    <AvatarImage src={image} alt="" />
                    {/* <AvatarFallback>Bot</AvatarFallback> */}
                </Avatar>
                {cardsNumber > 0 && <p className="absolute size-[1rem]  bg-red-900 rounded-full pt-0.5
                top-[82%] left-[65%] text-[0.8rem] flex justify-center items-center text-white ">
                    {cardsNumber}
                </p>
                }
            </div>
            <h1 className="absolute top-[37%] left-[40%] text-white font-semibold opacity-70">
                {name}
            </h1>
        </motion.div>
    );
}