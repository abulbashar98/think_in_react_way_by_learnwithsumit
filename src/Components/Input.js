import React from 'react';

const Input = ({ type, checked, onChange }) => {
    return <input type={type} checked={checked} onChange={onChange}></input>
};

export default Input;