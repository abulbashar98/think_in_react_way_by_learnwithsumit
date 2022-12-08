import React from 'react';
import { useContext } from 'react';
import { counterContext } from '../App';

const GlobalScopeOfReducer = () => {

    const countContext = useContext(counterContext)

    return (
        <div>
            <p>
                <button onClick={() => countContext.countDispatch('increment')} type='button'>Increment</button>
                <button onClick={() => countContext.countDispatch('decrement')} type='button'>Decrement</button>
            </p>
        </div>
    );
};

export default GlobalScopeOfReducer;