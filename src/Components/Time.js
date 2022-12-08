import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Time = () => {

    const [date, setDate] = useState(new Date());
    const buttonRef = useRef();

    useEffect(() => {
        // const interval = setInterval(() =>
        buttonRef.current = setInterval(() => {
            tick()
        }, 1000)


        return () => {
            // clearInterval(interval)
            clearInterval(buttonRef.current)
        }

    }, [])

    const tick = () => {
        setDate(new Date())
    }

    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
            <p>
                <button onClick={() => {
                    // Cannot get Access of Interval here, as that was local scope of useEffect.... Sooo
                    // clearInterval(interval)
                    clearInterval(buttonRef.current)
                }}>Clean Up</button>
            </p>
        </div>
    );
};

export default Time;