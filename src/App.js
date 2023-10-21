import { useState } from "react"
import Header from "./components/Header/Header.js"
import Hero from "./components/Hero/Hero.js"
import Main from "./components/Main/Main.js"
import Comments from "./components/Comments/Comments.js"
import Sidebar from "./components/Sidebar/Sidebar.js"
import videos from "./data/video-details.json"
import './App.scss';


function App() {
  const [currentVideo, setCurrentVideo] = useState (
    videos[0]
  )
  return (
    <div className="App">
      {/* <Header />
      <Hero />
      <Main /> */}
      <Comments 
      key={currentVideo.id}
      name={currentVideo.comments}
      timestamp={currentVideo.timestamp}
      comments={currentVideo.comments} />
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
