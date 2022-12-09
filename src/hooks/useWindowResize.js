import { useCallback } from "react";
import { useEffect, useState } from "react";


const useWindowResize = (screenSize) => {

    const [onSmallScreen, setOnSmallScreen] = useState(false);


    // The 'checkScreenSize' function makes the dependencies of useEffect Hook (at line 19) change on every render. Move it inside the useEffect callback. Alternatively, wrap the definition of 'checkScreenSize' in its own useCallback() Hook.

    // solution 2, useCallBack

    const checkScreenSize = useCallback(() => {
        setOnSmallScreen(window.innerWidth < screenSize)
    }, [screenSize])

    useEffect(() => {
        // solution 1

        // const checkScreenSize = () => {
        //     setOnSmallScreen(window.innerWidth < screenSize)
        // }

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize)


        return () => window.removeEventListener('resize', checkScreenSize)

        // For Solution 1, screenSize is required Dependency
        // }, [screenSize])


        // for solution 2, checkScreenSize is required Dependency
    }, [checkScreenSize])

    return onSmallScreen

}

export default useWindowResize;