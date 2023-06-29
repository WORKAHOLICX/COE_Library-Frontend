import React, { useState } from 'react'

const CommentForm = ({ handleSubmit, submitLabel, initialText = '', handleCancel, isSending }) => {
    const [text, settext] = useState(initialText);
    const isTextareaDisable = text.length === 0;
    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text);
        // settext('')
    }
    return (
        <form onSubmit={onSubmit}>
            <textarea className='comment-form-textarea' value={text} onChange={(e) => settext(e.target.value)} />
            <button className='comment-form-button' disabled={isTextareaDisable}>{submitLabel}</button>
            <button type='button' className='comment-form-button comment-form-cancel-button' onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default CommentForm