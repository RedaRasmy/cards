export default function pop<T>(array:T[]) {
    const lastElement = array[array.length -1]
    const newArray = array.slice(0,-1)

    return [newArray,lastElement]
}