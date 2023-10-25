// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import React from "react"
// import { useState } from "react"
// import Header from "./components/Header/Header.js"
// import details from "./data/video-details.json"
// import './App.scss';
// import HomePage from "./pages/HomePage/HomePage.js"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Main from "./components/Main/Main.js";
import Comments from "./components/Comments/Comments.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import HomePage from "./pages/HomePage/HomePage.js";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage.js";
import { useState } from "react";
import "./App.scss"
import details from "./data/video-details.json"

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
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:videoId" element={<VideoDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
