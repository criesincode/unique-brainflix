import React from "react"
import videos from "../../data/videos.json"
import "./Sidebar.scss"
import { useParams } from "react-router-dom"



const Sidebar = ({ handleClick, currentDetails }) => {
    const {key} = useParams();
    const baseURL = "https:project-2-api.herokuapp.com/?api_keya508756-ed08-4d31-9de7-9a600696cc9e"

    // useEffect(() => {
    //     const fetchvideos = async () => {
    //       const { data } = await axios(`${apiEndpoint}${cocktailName}`);
    //       console.log(data);
    //       setCocktailData(data);
    //     }
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