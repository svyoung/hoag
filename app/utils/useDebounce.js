import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
    const [debouncedVal, setDebouncedVal] = useState(value);

    useEffect(() => {
        const handleDelay = setTimeout(() => setDebouncedVal(value), delay);
        return () => clearTimeout(handleDelay)
    }, [value, delay]);

    return debouncedVal;
}