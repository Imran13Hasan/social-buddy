import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    console.log(comments);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    return (
        <div>
            <h1>Post detail of id {id}</h1>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
            <h2>Comments: {comments.length}</h2>
            {
                comments.map(comment => <div>
                        <p>email: {comment.email}</p>
                        <p>name: {comment.name}</p>
                </div>)
            }
        </div>
    );
};

export default PostDetails;