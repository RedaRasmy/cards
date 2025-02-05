import { Card } from "../types/cards.type"


export const COLORS = ['red', 'blue', 'green', 'yellow'] as const
export const POWERS = ['+3', 'Judge', 'Skip'] as const 
export const NUMBERS = [1, 2, 3, 4, 5, 6, 7] as const

// type Color = typeof COLORS[number]

export const CARDS : Card[] = COLORS.flatMap(color=>
    [...NUMBERS ,...POWERS].map(value=>{
        return {
            color,
            value
        } as Card
    })
)


export const CARDS_NUMBER = COLORS.length * (POWERS.length+NUMBERS.length)

export const COLORS_CLASSES = {
    red: "bg-red-900",
    blue: "bg-blue-900",
    yellow: "bg-yellow-700",
    green: "bg-green-900",
} as const