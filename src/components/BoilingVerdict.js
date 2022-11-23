import React from 'react';

const BoilingVerdict = ({ temperature = 0 }) => {
    if (temperature >= 100) {
        return <p>Water would Boil</p>
    }
    else {
        return <p>Water would not boil</p>
    }
};

export default BoilingVerdict;