import React from "react"
import videos from "../../data/videos.json"
import "./Sidebar.scss"



const Sidebar = ({}) => {
    return (
        <section>
        <p className="videosHeading">NEXT VIDEOS</p>
        
        { videos.map(videos => { 
            return ( <aside className="sidebar">
            <article className="videos">
                <div className="videosContainer">
                    <img className="videosImg" src={videos.image} alt="video image"/>    
                    <div className="videosSectionB">
                        <p className="videosTitle">{videos.title}</p>
                        <p className="videosChannel">{videos.channel}</p>
                    </div>    
                </div>
            </article> 
       
    </aside>) 
       })
    }
       </section> 
        )
}

export default Sidebar;