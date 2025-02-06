import { useEffect, useState } from "react";
import { Place } from "../interfaces/place";

export function useHamptonLoading(selectedPlace: Place | null) {
    const [isLoading, setIsLoading] = useState(false);
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false); 
            return;
        }

        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 3500);
        return () => clearTimeout(timer);
    }, [selectedPlace]);

    return { isLoading };
}
