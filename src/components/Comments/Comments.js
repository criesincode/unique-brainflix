import "./Comments.scss"

const Comments = ({comments}) => {
    return (
        <>
        {comments.map(comment =>{
            return (
                <section className="comments">
                <div className="commentsContainer">
                    <p className="commentsName">{comment.name}</p>
                    <p className="commentTimeStamp">{comment.timestamp}</p>
                    <p className="commentsComment">{comment.comment}</p>
                </div> 
                </section>  
            )
        })}
       </> 
    )
}

export default Comments;