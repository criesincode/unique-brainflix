import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import HomePage from "./pages/HomePage/HomePage.js";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage.js"
import "./App.scss"


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:videoId" element={<HomePage />} />
          <Route path="/upload" element={<VideoUploadPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
