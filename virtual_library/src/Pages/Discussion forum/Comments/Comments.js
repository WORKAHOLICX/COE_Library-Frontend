import React, { useState, useEffect } from 'react';
import '../Styles.css';
import Comment from './Comment';
import axios from '../../utils/axios';
import { useAuth } from "../../hooks/useAuth";
import { TopicCards } from '../../Programme Page/styledComponents';
import CommentForm from './CommentForm';
import { useParams } from 'react-router-dom';

const Comments = ({ currentUserId, loading, setLoading }) => {
    const { user } = useAuth();
    const { username, id } = user;
    const [comments, setcomments] = useState([]);
    const [Title, setTitle] = useState([]);
    const [newTopic, setnewTopic] = useState(false);
    const [isSending, setisSending] = useState(false);
    const [newCom, setnewCom] = useState(false)
    const [activeComments, setactiveComments] = useState(null);
    const rootComments = comments.filter(comment => comment.parentId === 0);
    const { idm } = useParams()

    const getReplies = commendId => {
        return comments.filter(comment => comment.parentId === commendId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }

    const createComment = async (text, parentId = null) => {
        return {
            id: Math.random().toString(36).substr(2, 9),
            body: text,
            parentId,
            userId: id,
            username: username,
            createdAt: new Date().toISOString(),
        };

    };

    const updateComment = async (text) => {
        return { text };
    };

    const deleteComment = async () => {
        return {};
    };

    const addComment = async (text, parentId = null) => {
        // setnewCom(true)
        setnewTopic(false)
        if (newTopic) {
            setnewCom(true)
        }
        await axios.post(`/forum/reply/${idm}/${username}/${new Date().toISOString()}/${parentId}/${id}`, {
            comments: text
        })
            .then(res => {
                // .then(res => {
                axios.get(`/forum/TopicComments/${idm}`)
                    .then((res) => {
                        setTitle(res.data[0])
                        setcomments(res.data[1])
                    })
                // })
                createComment(text, parentId)
                    .then((com) => {
                        setcomments([...comments, com])
                    })

            })
            .catch(err => {
                console.log(err);
            })
        setnewCom(false)
        setactiveComments(null)
    }

    const deleteComments = async (commentId) => {
        // if (window.confirm('Are you sure that you want to remove comment?')) {
        await axios.post(`/forum/delete/${commentId}`)
            .then(() => {
                deleteComment(commentId)
                    .then(() => {
                        const updatedcomments = comments.filter(
                            (comment) => comment.id !== commentId
                        );
                        setcomments(updatedcomments)
                    })
            })
            .catch((err) => {
                console.log(err);
            })
        setactiveComments(null)
        // }
    }

    const updatecomment = async (text, commentId) => {
        await axios.post(`/forum/edit/${commentId}`, {
            comments: text
        })
            .then(() => {
                updateComment(text, commentId)
                    .then(() => {
                        const updatedcomments = comments.map(comment => {
                            if (comment.id === commentId) {
                                return { ...comment, body: text }
                            }
                            return comment
                        })
                        setcomments(updatedcomments)
                    })
            })
            .catch((err) => {
                console.log(err);
            })
        setactiveComments(null)

    }


    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`/forum/TopicComments/${idm}`)
                .then((res) => {
                    setTitle(res.data[0])
                    setcomments(res.data[1])
                    setLoading(false);

                })
                .catch((err) => {
                    console.log(err);
                })
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    if (isSending) {
        document.body.style.overflow = 'hidden'
    }
    else {
        document.body.style.overflow = 'visible'
    }

    return (
        <>
            {
                isSending && (
                    <div className="form-container">
                        <div className="spinner"></div>
                    </div>
                )
            }

            <TopicCards>
                {
                    Title.map((title) => (
                        <>
                            <h1 className='text-left'>{title.Topic}</h1>
                            <p>{title.summary}</p>
                            <div className='flex flex-row justify-between'>
                                <div>Posted by <span className='font-bold'>{title.author}</span></div>
                                <div className='flex flex-col items-center'>
                                    <span>{new Date(title.createdAt).toLocaleDateString()}</span>
                                    <span>{new Date(title.createdAt).toLocaleTimeString()}</span>
                                </div>
                            </div>
                            {!newTopic && !newCom ?
                                <p><button className="comment-action text-sm" onClick={() => setnewTopic(true)}>Reply</button></p>
                                : ""
                            }
                            {
                                newTopic && (
                                    <CommentForm submitLabel='Write' handleSubmit={addComment} handleCancel={() => setnewTopic(false)} />
                                )}
                        </>
                    ))
                }

                <hr />

                <div className="comments-container">
                    {
                        rootComments.map((rootComment) => (
                            <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)} currentUserId={currentUserId} deleteComment={deleteComments} activeComment={activeComments} setActiveComment={setactiveComments} addComment={addComment} updateComment={updatecomment} />
                        ))
                    }

                    {
                        newCom &&
                        <div className='flex flex-col items-center'>
                            <div className="spinner"></div>
                        </div>
                    }
                </div>
            </TopicCards>
        </>
    )
}

export default Comments