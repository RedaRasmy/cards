
export default function split<T>(array:T[]):[T[],T[]] {
    const mid = Math.floor(array.length / 2)

    return [
        array.slice(0,mid),
        array.slice(mid)
    ]


}
