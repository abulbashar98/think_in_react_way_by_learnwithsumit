
import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';


const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {

        case 'SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.result
            }

        case 'FAILURE':
            return {
                loading: false,
                error: 'There was a problem while Fetching!',
                post: {}
            }
    }


}

const GetPostWithUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicodee.com/posts/1';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: "SUCCESS",
                    result: data
                })
            })
            .catch(() => {
                dispatch({
                    type: 'FAILURE',
                })
            })


    }, [])


    return (
        <div>
            <h1>{state.loading ? "Loading...." : state.post.title}</h1>
            <h1>{state.error || null}</h1>
        </div>
    );
};

export default GetPostWithUseReducer;





