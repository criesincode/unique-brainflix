import React from "react"
import Header from "./components/Header/Header.js"
import Hero from "./components/Hero/Hero.js"
import Main from "./components/Main/Main.js"
import Comments from "./components/Comments/Comments.js"
import Sidebar from "./components/Sidebar/Sidebar.js"
import videoDetails from "./data/video-details.json"
import './App.scss';

function App() {
  const heroVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const heroVideo = videoDetails.find(video => video.id === heroVideoId);


  return (
    <div className="App">
      {/* <Header /> */}
      <Hero 
      videoDetails={heroVideo}/>
      {/* <Main />
      <Comments />
      <Sidebar /> */}
    </div>
  );
}

export default App;
