import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data);
            });
    }, []);

    return (
        <div>
            <h1>ПОСТЫ:</h1>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}
function Post({ post }) {
    const [newComment, setNewComment] = useState({ name: '', text: '' });
    const [comments, setComments] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            setComments(response.data);
            }
        fetchData().then();
        }, [post.id]);
    const handleCommentSubmit = async () => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/comments', {
                postId: post.id,
                name: newComment.name,
                body: newComment.text
            });

            const postedComment = {'name': response.data.name, 'text': response.data.body};
            setComments([...comments, postedComment]);
            setNewComment({ name: '', text: '' });
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };


    return (
        <div>
            <h1 style={{color: 'green'}}>{'title: ' + post.title}</h1>
            <h2 style={{color: 'orange'}}>{'body: ' + post.body}</h2>
            <Comments comments={comments} />
            <CommentForm
                newComment={newComment}
                onCommentChange={(e) =>
                    setNewComment({ ...newComment, [e.target.name]: e.target.value })
                }
                onCommentSubmit={handleCommentSubmit}
            />
        </div>
    );
}

function Comments({ comments }) {
    return (
        <div>
            <div>Комментарии</div>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        {comment.name}: {comment.text ? comment.text : comment.body}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function CommentForm({ newComment, onCommentChange, onCommentSubmit }) {
    return (
        <div>
            <div>Добавить комментарий</div>
            <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={newComment.name}
                onChange={onCommentChange}
            />
            <textarea
                name="text"
                placeholder="Текст комментария"
                value={newComment.text}
                onChange={onCommentChange}
            />
            <button onClick={onCommentSubmit}>Отправить</button>
        </div>
    );
}

export default Posts;