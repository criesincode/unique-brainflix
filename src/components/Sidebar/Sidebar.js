import "./Sidebar.scss"

const Sidebar = () => {
    return (
        <aside class="sidebar">
            <article className="videos">
                <h2 className="videosHeading">NEXT VIDEOS</h2>
                <div className="videosTitle">{video-details.title}</div>
                <p className="videosChannel">{video-details.channel}</p>
                <img className="videosImg" src={video-details.images}/>
            </article> 
       
    </aside> 
    )
}

export { Sidebar };