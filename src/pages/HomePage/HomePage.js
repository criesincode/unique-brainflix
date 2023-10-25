import Hero from "../../components/Hero/Hero.js"
import Main from "../../components/Main/Main.js"
import Comments from "../../components/Comments/Comments.js"
import Sidebar from "../../components/Sidebar/Sidebar.js"
import details from "../../data/video-details.json"
import "./HomePage.scss"
import { useState } from "react"


const HomePage = () => {
    const [currentDetails, setCurrentDetails] = useState(
        details[0]
      )
    
      const heroVideo = details.find(video => video.id === currentDetails.id);
      const handleClick = (newVideoID) => {
        setCurrentDetails(details.find(video => video.id === newVideoID))
      }
    return (
        <>
            <Hero videoDetails={heroVideo} />
            <div className="desktopView">
                <div className="desktopA">
                    <Main
                        currentDetails={currentDetails} />
                    <Comments
                        key={currentDetails.id}
                        name={currentDetails.comments}
                        timestamp={currentDetails.timestamp}
                        comments={currentDetails.comments} />
                </div>
                <div className="desktopB">
                <Sidebar
                    handleClick={handleClick}
                    currentDetails={currentDetails} />
                </div>    
            </div>
        </>
    )
}

export default HomePage;