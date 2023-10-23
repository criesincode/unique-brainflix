import React from "react"
import { useState } from "react"
import Header from "./components/Header/Header.js"
import Hero from "./components/Hero/Hero.js"
import Main from "./components/Main/Main.js"
import Comments from "./components/Comments/Comments.js"
import Sidebar from "./components/Sidebar/Sidebar.js"
import details from "./data/video-details.json"
import videoDetails from "./data/video-details.json"
import './App.scss';


function App() {
  const [currentDetails, setCurrentDetails] = useState (
    details[0]
  )
  const heroVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const heroVideo = videoDetails.find(video => video.id === heroVideoId);


  const [currentVideo, setCurrentVideo] = useState (
    details[0]
  )
  return (
    <div className="App">
      <Header />
      <Hero videoDetails={heroVideo}/>
      <Main 
        currentDetails={currentDetails}/> 
      <Comments 
      key={currentVideo.id}
      name={currentVideo.comments}
      timestamp={currentVideo.timestamp}
      comments={currentVideo.comments} />
      <Sidebar />
    </div>
  );
}

export default App;
