import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import useWindowResize from '../hooks/useWindowResize';

const LayoutComponentTwo = () => {

    // const [onSmallScreen, setOnSmallScreen] = useState(false);

    // const checkScreenSize = () => {
    //     setOnSmallScreen(window.innerWidth < 760)
    // }

    // useEffect(() => {
    //     checkScreenSize();
    //     window.addEventListener('resize', checkScreenSize)


    //     return () => window.removeEventListener('resize', checkScreenSize)

    // }, [])

    //===> Use Custom hook instead...

    const onSmallScreen = useWindowResize(600);

    return (
        <div className={onSmallScreen ? "small" : "large"}>
            <h1>This is Layout Component Two, Inspect className while resizing the window!</h1>
        </div>
    );
};

export default LayoutComponentTwo;