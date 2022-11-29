import React from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from '../Contexts/themeContext';

const Content = () => {
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(count, incrementCount) => {
                    return <ThemeContext.Consumer>{({ theme }) => <HoverCounter
                        theme={theme}
                        count={count}
                        incrementCount={incrementCount}
                    />}</ThemeContext.Consumer>
                }}
            </Counter>
        </div>
    );
};

export default Content;