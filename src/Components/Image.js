import React from 'react';

const Image = ({ imgSrc, altTag, width }) => {
    return <img src={imgSrc} alt={altTag} width={width} />
};

export default Image;