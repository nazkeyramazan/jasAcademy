function CommentBlock({comment}) {

    const date = new Date(comment.created);
    return (
        <div className="comment_block">
            <div className="top">
                <img className="avatar" src={comment.author.avatarUrl} alt="" />
                <span className="name">{comment.author.name}</span>
                <span className="date">{date.toLocaleString()}</span>
            </div>
            <div className="text">
                {comment.text}
            </div>
        </div>
    )
}

export default CommentBlock;