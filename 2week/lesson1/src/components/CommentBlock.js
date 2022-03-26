import React from 'react'

function CommentBlock({comment , depth=0}) {
    const date = new Date(comment.created);
    return (
        <div>
            <div className="comment_block" style={{marginLeft: depth*30 + 'px'}}>
                <div className="top">
                    <img className="avatar" src={comment.author.avatarUrl} alt="" />
                    <span className="name">{comment.author.name}</span>
                    <span className="date">{date.toLocaleString()}</span>
                </div>
                <div className="text">
                    {comment.text}
                </div>
            </div>
            {comment.answers ? comment.answers.map((comment) =>
                <CommentBlock comment={comment} key={comment.id} depth={depth+1} />
            ) : ''}
        </div>
        
    )
}

export default CommentBlock;