import React from "react"
import "./Sidebar.scss"
import "../../data/video-details.json"

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <article className="videos">
                <h2 className="videosHeading">NEXT VIDEOS</h2>
                <div className="videosTitle">{video-details.title}</div>
                <p className="videosChannel">{video-details.channel}</p>
                <img className="videosImg" src={video-details.images} alt="video image"/>
            </article> 
       
    </aside> 
    )
}

export default Sidebar;