import React from "react";
import { useState } from "react";



const TodoFunctional = () => {

    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);


    const style = { width: '50%', marginLeft: '500px' }

    const handleChange = (e) => {

        const inputValue = e.target.value;

        const warning = inputValue.includes(".js") ? "You need Advanced JavaScript skill to Handle this, Do you have it??" : null

        setTodo(inputValue);
        setWarning(warning);
    }



    return (
        <div style={style}>
            <h2>{todo}</h2>
            <textarea onChange={handleChange} name="input" id="" ></textarea>
            <h1>{warning || "Good Choice!"}</h1>

        </div>
    );
};

export default TodoFunctional;