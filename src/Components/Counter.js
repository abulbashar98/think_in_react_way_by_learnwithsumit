import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const style = {
        width: '50%',
        marginLeft: '500px'
    }

    const addFive = () => {

        let i = 0
        while (i < 5) {
            // still adds 1, whole while loop and set count once is Batch
            // setCount(count + 1);

            // solve using Call Back
            setCount((prevState) => prevState + 1);
            i += 1;
        }
    }



    return (
        <div style={style}>
            <h1>{count}</h1>
            {/* // Wrong way of updating state. */}
            {/* <button type='button' onClick={() => setCount(count + 1)}>Add 1</button> */}

            {/* // Recomended way */}
            <button type='button' onClick={() => setCount((prevState) => prevState + 1)}>Add 1</button>
            <br />
            {/* let me where is the Problem with Batch Update */}
            <button type='button' onClick={addFive}>Add 5</button>
        </div>
    );
};

export default Counter;