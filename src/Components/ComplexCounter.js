import React from 'react';
import { useReducer } from 'react';

// array.prototype.reduce() take initialValue 
const initialState = {
    counter: 0,
    counter2: 0
};

const reducer = (state, action) => {

    switch (action.type) {

        case 'increment1':
            return { ...state, counter: state.counter + action.value };
        case 'decrement1':
            return { ...state, counter: state.counter - action.value };
        case 'increment2':
            return { ...state, counter2: state.counter2 + action.value };
        case 'decrement2':
            return { ...state, counter2: state.counter2 - action.value };
        default:
            return state;

    }
}


const ComplexCounter = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                <h1>Count = {count.counter}</h1>
                <p>
                    <button onClick={() => dispatch({
                        type: "increment1",
                        value: 1
                    })} type='button'>Increment1 By 1</button>
                    <button onClick={() => dispatch({
                        type: "increment1",
                        value: 5,
                    })} type='button'>Increment1 By 5</button>
                    <button onClick={() => dispatch({
                        type: "decrement1",
                        value: 1,
                    })} type='button'>Decrement1 by 1</button>
                    <button onClick={() => dispatch({
                        type: "decrement1",
                        value: 5,
                    })} type='button'>Decrement1 by 5</button>
                </p>
            </div>
            <div>
                <h1>Count = {count.counter2}</h1>
                <p>
                    <button onClick={() => dispatch({
                        type: "increment2",
                        value: 1
                    })} type='button'>Increment2 By 1</button>
                    <button onClick={() => dispatch({
                        type: "increment2",
                        value: 5,
                    })} type='button'>Increment2 By 5</button>
                    <button onClick={() => dispatch({
                        type: "decrement2",
                        value: 1,
                    })} type='button'>Decrement2 by 1</button>
                    <button onClick={() => dispatch({
                        type: "decrement2",
                        value: 5,
                    })} type='button'>Decrement2 by 5</button>
                </p>
            </div>
        </div>
    );
};

export default ComplexCounter;