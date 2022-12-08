
import React from 'react';
import { useReducer } from 'react';

// array.prototype.reduce() take initialValue 
const initialState = 0;
const initialState2 = 5;

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


const MultipleUseOfReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState2);

    return (
        <div>
            <div>
                <h1>Count = {count}</h1>
                <p>
                    <button onClick={() => dispatch('increment')} type='button'>Increment</button>
                    <button onClick={() => dispatch('decrement')} type='button'>Decrement</button>
                </p>
            </div>
            <div>
                <h1>Count2 = {count2}</h1>
                <p>
                    <button onClick={() => dispatch2('increment')} type='button'>Increment2</button>
                    <button onClick={() => dispatch2('decrement')} type='button'>Decrement2</button>
                </p>
            </div>
        </div>
    );
};

export default MultipleUseOfReducer;


