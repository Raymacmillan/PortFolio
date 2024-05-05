import { useState, useEffect } from "react";

function useGetScrollY() {
    const [scrollY, setScrollY] = useState(window.scrollY);

    const newScrollY = () => {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", newScrollY);
        
        return () => window.removeEventListener("scroll", newScrollY);
    },[scrollY])

    return scrollY;
}

export default useGetScrollY;