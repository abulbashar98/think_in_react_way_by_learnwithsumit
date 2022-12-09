import React from 'react';
import useWindowResize from '../hooks/useWindowResize';
// import { useEffect } from 'react';
// import { useState } from 'react';

const LayoutComponentOne = () => {

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

    const onSmallScreen = useWindowResize();



    return (
        <div>
            <h1>This is Layout Component One</h1>
            <h2>You are browsing on a {onSmallScreen ? "small" : "large"} device</h2>
        </div>
    );
};

export default LayoutComponentOne;