import React from "react"
import { useState } from "react"
import Header from "./components/Header/Header.js"
import Hero from "./components/Hero/Hero.js"
import Main from "./components/Main/Main.js"
import Comments from "./components/Comments/Comments.js"
import Sidebar from "./components/Sidebar/Sidebar.js"
import details from "./data/video-details.json"
import './App.scss';


function App() {
  const [currentDetails, setCurrentDetails] = useState(
    details[0]
  )

  const heroVideo = details.find(video => video.id === currentDetails.id);
  const handleClick = (newVideoID) => {
    setCurrentDetails(details.find(video => video.id === newVideoID))
  }

  return (
    <div className="App">
      <Header />
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
        <div className="desktopB"></div>
      <Sidebar
        handleClick={handleClick}
        currentDetails={currentDetails} />
        </div>
    </div>
  );
}

export default App;
