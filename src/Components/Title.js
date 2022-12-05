import React from 'react';

const Title = ({ title }) => {

    console.log("Title Render");
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default React.memo(Title);