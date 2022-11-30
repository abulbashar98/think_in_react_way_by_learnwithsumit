import React from "react";
import { useState } from "react";



const TodoFunctional = () => {

    const [todo, setTodo] = useState({
        title: '',
        description: ''
    });
    ;


    const style = { width: '50%', marginLeft: '500px' }


    const { title, description } = todo;


    return (
        <div style={style}>
            <p>{title}</p>
            // Problem, Updating just one state value, Because setTodo
            // does not merge like setState in Class Component
            {/* <p>
                <input type="text" name="title" onChange={(e) => setTodo({
                    title: e.target.value
                })} />
            </p> */}

            // Solution: First bring the whole object, then override
            <p>
                <input type="text" name="title" onChange={(e) => setTodo({
                    ...todo,
                    title: e.target.value
                })} />
            </p>
            <h2>{description}</h2>
            // Same Solution Applied here, Even for an Array Do the same.
            <textarea onChange={(e) => setTodo({
                ...todo,
                description: e.target.value
            })} name="input" id="" ></textarea>


        </div>
    );
};

export default TodoFunctional;