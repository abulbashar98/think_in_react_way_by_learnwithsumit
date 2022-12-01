

import React, { useEffect, useState } from 'react';

const MyComponentFunctional = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    // const [date, setDate] = useState(new Date());


    useEffect(() => {
        console.log("Counter Rendered");
        document.title = `Clicked ${count} times`
    }, [count])

    // useEffect(() => {
    //     console.log("Timer Rendered");
    //     setInterval(tick(), 1000)
    // }, [])

    // const tick = () => {
    //     setDate(new Date())
    // }

    const addClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div>
            <p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </p>
            {/* <p>Time: {date.toLocaleTimeString()}</p> */}
            <p>
                <button onClick={addClick}>Add Click</button>
            </p>
        </div>
    );
};

export default MyComponentFunctional;