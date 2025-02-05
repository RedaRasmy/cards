export type Enumerate<
    N extends number , 
    Acc extends number[] = []
> = (
    N extends Acc['length'] ? 
    Acc[number] : Enumerate<N,[...Acc,Acc['length']]>
)

export type Range<
    A extends number,
    B extends number
> = Exclude<Enumerate<B>,Enumerate<A>>



