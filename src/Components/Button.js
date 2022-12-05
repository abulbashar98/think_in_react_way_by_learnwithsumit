import React from 'react';

const Button = ({ children, incrementCount }) => {
    console.log(`${children} render`);
    return (
        <div>
            <button onClick={incrementCount}>{children}</button>
        </div>
    );
};

export default React.memo(Button);