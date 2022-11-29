import React from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

const Content = ({ theme }) => {
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(count, incrementCount) => {
                    return <Consumer>{({ value }) => <HoverCounter
                        theme={theme}
                        count={count}
                        incrementCount={incrementCount}
                    />}</Consumer>
                }}
            </Counter>
        </div>
    );
};

export default Content;