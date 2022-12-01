

import React, { useEffect, useState } from 'react';

const MyComponentFunctional = () => {

    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());


    useEffect(() => {
        console.log("Counter Rendered");
        document.title = `Clicked ${count} times`
    }, [count])

    useEffect(() => {
        console.log("Timer Rendered");
        const interval = setInterval(tick, 1000)

        // clean up Function comes with useEffect
        return () => {
            console.log('Component Unmounted');
            clearInterval(interval)
        }
    }, [])

    const tick = () => {
        console.log('clock Ticking');
        setDate(new Date())
    }

    const addClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button onClick={addClick}>Add Click</button>
            </p>
        </div>
    );
};

export default MyComponentFunctional;