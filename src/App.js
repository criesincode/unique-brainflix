import React from "react"
import Header from "./components/Header/Header.js"
import Hero from "./components/Hero/Hero.js"
import Main from "./components/Main/Main.js"
import Comments from "./components/Comments/Comments.js"
import Sidebar from "./components/Sidebar/Sidebar.js"
import videos from "./data/videos.json"

import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Hero />
      <Main />
      <Comments /> */}
      <Sidebar 
      videos={videos} />
    </div>
  );
}

export default App;
