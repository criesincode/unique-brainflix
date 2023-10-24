import React from "react"
import MohanMurugeImage from "../../assets/images/Mohan-muruge.jpg"
import viewsIcon from "../../assets/icons/views.svg"
import likesIcon from "../../assets/icons/likes.svg"
import "./Main.scss"

const Main = ({ currentDetails }) => {
    return (
        <main className="main">
            <div className="main__TitleContainer">
            <p className="main__Title">{currentDetails.title}</p>
                <div className="main__DetailsContainerB">
                    <div className="main__DetailsSectionB">
                        <p className="mainAuthorB">By {currentDetails.channel}</p>
                        <p className="mainViewsB">{currentDetails.timestamp}</p>
                    </div>
                    <div className="main__DetailsSectionC">
                        <p className="mainDateB"><img className="views" src={viewsIcon} />{currentDetails.views}</p>
                        <p className="mainLikesB"><img className="likes" src={likesIcon} />{currentDetails.likes}</p>
                    </div>
                </div>
            </div>
            <div className="main__DetailsContainer">
                <div className="main__DetailsSectionA">
                    <p className="mainAuthor">By {currentDetails.channel}</p>
                    <p className="mainDate"><img className="views" src={viewsIcon} />{currentDetails.views}</p>
                </div>
                <div className="main__DetailsSection">
                    <p className="mainViews">{currentDetails.timestamp}</p>
                    <p className="mainLikes"><img className="likes" src={likesIcon} />{currentDetails.likes}</p>
                </div>
                <div className="main__DetailsDescription">
                    <p className="mainInfoA">{currentDetails.description}</p>
                    <p className="mainInfoB">3 Comments</p>
                </div>
                <div className="main__DetailsForm">
                    <p className="mainFormTextA">JOIN THE CONVERSATION</p>
                    <div className="mainCommentContainer">
                        <img className="mainCommentImage" src={MohanMurugeImage} alt="murage img" />
                        <form id="mainCommentForm">
                            <p className="mainFormText">JOIN THE CONVERSATION</p>
                            <div className="mainCommentInput">
                                <label className="comment" htmlFor="comment"></label>
                                <input type="comment" name="comment" id="comment" placeholder="Add a new comment" />
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
