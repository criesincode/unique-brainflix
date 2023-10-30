import React from "react";
import "./Comments.scss";

const Comments = ({ comments }) => {
    let date = new Intl.DateTimeFormat("en-US", {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    }).format(comments.timestamp)
    return (
        <>
            {Array.isArray(comments) && comments.map(comment => (
                <section className="comments" key={comment.id}>
                    <div className="comments__avi"></div>
                    <div className="comments__container">
                        <div className="commentsSectionA">
                            <p className="comments__name">{comment.name}</p>
                            <p className="comments__timestamp">{date}</p>
                        </div>
                        <p className="comment__comment">{comment.comment}</p>
                    </div>
                </section>
            ))}
        </>
    );
}

export default Comments;
