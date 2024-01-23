import { useState, useEffect } from "react";

function useGetWindowSize() {
    const [size, setSize] = useState(window.innerWidth);

    const onResize = () => {
        setSize(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);

    },[size])

    return size;

}

export default useGetWindowSize;