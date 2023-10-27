import React from "react"
import "./Sidebar.scss"
import axios from "axios"
import { useState, useEffect } from "react"



const Sidebar = ({currentDetails}) => {
    const [videoInfo, setVideoInfo] = useState([])
      
    
    useEffect(() => {
                const getVideoDetails = async () => {
                  try {
                    const response = await axios.get(`https://project-2-api.herokuapp.com/videos?api_key=a508756-ed08-4d31-9de7-9a600696cc9e`);
                    setVideoInfo(response.data);
                  } catch (error) {
                    console.error(error);
                  }
                };
            
                getVideoDetails();
              }, []);
            
              if (!videoInfo) {
                return <div>Loading...</div>;
              }
    return (
        <section className="sideSection">
            <p className="videosHeading">NEXT VIDEOS</p>
            <aside className="sidebar">
                {videoInfo
                .filter(video => video.id !== currentDetails.id)
                .map(video => {
                    return (
                        <article key={video.id} className="videos">
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