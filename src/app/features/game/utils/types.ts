
// The types depend on the constants


export type Direction = 'left'| 'top' | 'right' | 'bottom'

export type Coordinates = {
    x : number,
    y: number
}

export type LabelInfos = {
    name:string,
    image:string,
    timer:boolean,
    cardsNumber:number
}