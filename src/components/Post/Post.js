import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const { id, title, body } = props.post;
    const history = useHistory();

    const showComments = (id) => {
        const url = `post/${id}`;
        history.push(url)
    }

    return (
        <div>
            <h2>{id}. {title}</h2>
            <p>Details: {body}</p>
            <button onClick={() => showComments(id)}>Show Comments</button>
        </div>
    );
};

export default Post;