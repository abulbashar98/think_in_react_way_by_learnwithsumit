import { useEffect, useState } from "react";


const useWindowResize = () => {

    const [onSmallScreen, setOnSmallScreen] = useState(false);

    const checkScreenSize = () => {
        setOnSmallScreen(window.innerWidth < 760)
    }

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize)


        return () => window.removeEventListener('resize', checkScreenSize)

    }, [])

    return onSmallScreen

}

export default useWindowResize;