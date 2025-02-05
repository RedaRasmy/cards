import { useEffect, useState } from "react";

function useLoading(promises: Promise<unknown>[]) {
    const [loading, setLoading] = useState(true);
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState<Error | null>(null);
    
    useEffect(() => {
        const load = async () => {
            try {
                const totalPromises = promises.length;
                let loadedPromises = 0;
                await Promise.all(promises.map(async promise => {
                    try {
                        await promise;
                        loadedPromises++;
                        setProgress(loadedPromises/totalPromises);
                    } catch {
                        setError(new Error("Failed to load game resources"));
                        setLoading(false);
                    }
                }))
                setLoading(false);
            } catch {
                setError(new Error("Failed to load game resources"));
                setLoading(false);
            }
        };
        load()
    } , [promises]);
    
    return { loading , error , progress};
}

export default useLoading;