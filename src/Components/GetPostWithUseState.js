import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const GetPostWithUseState = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {

        const url = 'https://jsonplaceholder.typicode.com/posts/1';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setPost(data)
                setError('');
            })
            .catch(() => {
                setLoading(true);
                setError('There was a problem while fetching!');
                setPost({});
            })
    }, [])


    return (

        <div>
            <h1>{loading ? 'Loading...' : post.title}</h1>
            <h1>{error || null}</h1>
        </div>

    )
}

export default GetPostWithUseState;