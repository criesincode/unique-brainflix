import React from "react"
import "./Main.scss"

const Main = ({ currentDetails }) => {
    return (
        <main className="main">
                <div className="main__TitleContainer">
                    <p className="main__Title">{currentDetails.title}</p>
                </div>
                <div className="main__DetailsContainer">
                    <div className="main__DetailsSection">
                        <p className="mainAuthor">By {currentDetails.channel}</p>
                        <p className="mainDate">{currentDetails.date}</p>
                    </div>
                    <div className="main__DetailsSection">
                        <p className="mainViews">{currentDetails.views}</p>
                        <p className="mainLikes">{currentDetails.likes}</p>
                    </div>
                    <div className="main__DetailsDescription">
                        <p className="mainInfoA">{currentDetails.description}</p>
                        <p className="mainInfoB">3 Comments</p>
                    </div>
                    <div className="main__DetailsForm"> 
                        <h2 className="mainFormText">Join the Conversation</h2>
                        <div className="mainCommentContainer">
                            <img className="mainCommentImage" src="./assets/images/Mohan-muruge.jpg" alt="murage img"/>
                            <form id="mainCommentForm">
                                <div className="mainCommentInput">
                                <label className="comment" htmlFor="comment"></label>
                                <input type="comment" name="comment" id="comment" placeholder="Add a new comment"/>
                                <br />
                                <button>COMMENT</button>
                                </div>    
                            </form>         
                    </div> 
             
                </div>
            </div>
        </main>
    )
}
 

export default Main;
