import React from "react"
import videos from "../../data/videos.json"
import "./Sidebar.scss"



const Sidebar = ({ handleClick, currentDetails }) => {
    return (
        <section className="sideSection">
            <p className="videosHeading">NEXT VIDEOS</p>
            <aside className="sidebar">
                {videos
                .filter(video => video.id !== currentDetails.id)
                .map(video => {
                    return (
                        <article key={video.id} className="videos" onClick={() => handleClick(video.id)}>
                            <div className="videosContainer">
                                <img className="videosImg" src={video.image} alt="video image" />
                                <div className="videosSectionB">
                                    <p className="videosTitle">{video.title}</p>
                                    <p className="videosChannel">{video.channel}</p>
                                </div>
                            </div>
                        </article>

                    )
                })
                }</aside>
        </section>
    )
}

export default Sidebar;