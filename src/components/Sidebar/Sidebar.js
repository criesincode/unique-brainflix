import React from "react"

import "./Sidebar.scss"



const Sidebar = ({videos}) => {
    return (
        <section>
        <h2 className="videosHeading">NEXT VIDEOS</h2>
        
        { videos.map(videos => { 
            return ( <aside className="sidebar">
            <article className="videos">
                <div className="videosTitle">{videos.title}</div>
                <p className="videosChannel">{videos.channel}</p>
                <img className="videosImg" src={videos.image} alt="video image"/>
            </article> 
       
    </aside>) 
       })
    }
       </section> 
        )
}

export default Sidebar;