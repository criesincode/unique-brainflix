import React from "react";
import "./Comments.scss";

const Comments = ({ comments }) => {
    return (
        <>
            {Array.isArray(comments) && comments.map(comment => (
                <section className="comments" key={comment.id}>
                    <div className="commentsAvi"></div>
                    <div className="commentsContainer">
                        <div className="commentsSectionA">
                            <p className="commentsName">{comment.name}</p>
                            <p className="commentTimeStamp">{comment.timestamp}</p>
                        </div>
                        <p className="commentsComment">{comment.comment}</p>
                    </div>
                </section>
            ))}
        </>
    );
}

export default Comments;
