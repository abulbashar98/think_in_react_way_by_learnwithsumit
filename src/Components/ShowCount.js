import React from 'react';

const ShowCount = ({ title, count }) => {

    console.log(`${title} render`);

    return (
        <div>
            <h2>{title} is {count}</h2>
        </div>
    );
};

export default React.memo(ShowCount);