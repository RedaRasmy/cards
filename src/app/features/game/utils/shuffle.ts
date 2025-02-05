
export default function shuffle<T>(array: T[]): T[] {
    // Fisher-Yates algorithm
    // this function follow a Uniform Distribution

    const shuffledArray = [...array]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

