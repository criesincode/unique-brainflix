import React from "react"
import MohanMurugeImage from "../../assets/images/Mohan-muruge.jpg"
import viewsIcon from "../../assets/icons/views.svg"
import likesIcon from "../../assets/icons/likes.svg"
import "./Main.scss"

const Main = ({ currentDetails }) => {
    return (
        <main className="main">
            <div className="main__title-container">
            <p className="main__title">{currentDetails.title}</p>
                <div className="main__details-container--b">
                    <div className="main__details-section--b">
                        <p className="main__author--b">By {currentDetails.channel}</p>
                        <p className="main__views--b">{currentDetails.timestamp}</p>
                    </div>
                    <div className="main__details-section--c">
                        <p className="main__date--b"><img className="views" src={viewsIcon} />{currentDetails.views}</p>
                        <p className="main__likes--b"><img className="likes" src={likesIcon} />{currentDetails.likes}</p>
                    </div>
                </div>
            </div>
            <div className="main__DetailsContainer">
                <div className="main__details-section--a">
                    <p className="main__author">By {currentDetails.channel}</p>
                    <p className="main__date"><img className="views" src={viewsIcon} />{currentDetails.views}</p>
                </div>
                <div className="main__details-section">
                    <p className="main__views">{currentDetails.timestamp}</p>
                    <p className="main__likes"><img className="likes" src={likesIcon} />{currentDetails.likes}</p>
                </div>
                <div className="main__DetailsDescription">
                    <p className="main__info--a">{currentDetails.description}</p>
                    <p className="main__info--b">3 Comments</p>
                </div>
                <div className="main__DetailsForm">
                    <p className="main__form-text--a">JOIN THE CONVERSATION</p>
                    <div className="main__comment-container">
                        <img className="main__comment-image" src={MohanMurugeImage} alt="murage img" />
                        <form id="mainCommentForm">
                            <p className="main__form-text">JOIN THE CONVERSATION</p>
                            <div className="main__comment-input">
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
