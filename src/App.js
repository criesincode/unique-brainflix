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
  const [currentDetails, setCurrentDetails] = useState (
    details[0]
  )
  return (
    <div className="App">
      {/* <Header />
      <Hero /> */}
      <Main 
        title={currentDetails.title}/>
      {/* <Comments />
      <Sidebar /> */}
    </div>
  );
}

export default App;
