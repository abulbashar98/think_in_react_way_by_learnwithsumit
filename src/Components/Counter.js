import React from 'react';
import { useReducer } from 'react';

// array.prototype.reduce() take initialValue 
const initialState = 0;

const reducer = (state, action) => {

    switch (action) {

        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;

    }
}


const Counter = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Count = {count}</h1>
            <p>
                <button onClick={() => dispatch('increment')} type='button'>Increment</button>
                <button onClick={() => dispatch('decrement')} type='button'>Decrement</button>
            </p>
        </div>
    );
};

export default Counter;