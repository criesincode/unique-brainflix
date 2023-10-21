const Main = () => {
    return (
        <main className="main">
            <p className="mainTitle">BMX Rampage: 2021 Highlights</p>
            <div className="mainDetails">
                <p className="mainInfo">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
                <p className="mainInfo">3 Comments</p>
            </div>
            <div className="mainInfoCommentSection">
                <h2 className="mainCommentSectionText">Join the Conversation</h2>
            </div>
            <div className="mainCommentContainer">
                <img className="mainCommentImage" src="./assets/images/Mohan-muruge.jpg"/>
                    <form id="mainCommentForm">
                        <div className="mainCommentInput">
                            <h5 className="mainCommentInputText">COMMENT</h5>
                            <label className="comment" for="comment"></label>
                            <input type="comment" name="comment" id="comment" placeholder="Add a new comment"/>
                            <br />
                            <button>COMMENT</button>
                        </div>    
                    </form>     
            </div>  
        </main>  
    )
}

export default Main;