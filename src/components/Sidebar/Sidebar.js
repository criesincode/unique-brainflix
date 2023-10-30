import React from "react"
import "./Sidebar.scss"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';



const Sidebar = ({ currentDetails }) => {
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
    <section className="side__section">
      <p className="videos__heading">NEXT VIDEOS</p>
      <aside className="sidebar">
        {videoInfo
          .filter(video => video.id !== currentDetails.id)
          .map(video => {
            return (
              <Link to={`/videos/${video.id}`}>
                <article key={video.id} className="videos">
                  <div className="videos__container">
                    <img className="videos__img" src={video.image} alt="video image" />
                    <div className="videos__section--b">
                      <p className="videos__title">{video.title}</p>
                      <p className="videos__channel">{video.channel}</p>
                    </div>
                  </div>
                </article>
              </Link>

            )
          })
        }</aside>
    </section>
  )
}

export default Sidebar;