import React from 'react';

const BoilingVerdict = ({ celsius = 0 }) => {
    if (celsius >= 100) {
        return <p>Water would Boil</p>
    }
    else {
        return <p>Water would not boil</p>
    }
};

export default BoilingVerdict;