import React from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import themeContext from '../Contexts/themeContext';
import { useContext } from 'react';

export default function Content() {

    const context = useContext(themeContext);

    const { theme, switchTheme } = context;

    console.log("Section Component Rendered");

    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(count, incrementCount) =>
                    <HoverCounter
                        theme={theme}
                        switchTheme={switchTheme}
                        count={count}
                        incrementCount={incrementCount}
                    />
                }
            </Counter>
        </div>
    );

};



