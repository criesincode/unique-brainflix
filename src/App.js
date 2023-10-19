import logo from './logo.svg';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Comments from "./components/Comments"
import Sidebar from "./components/Sidebar"
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Comments />
      <Sidebar />
    </div>
  );
}

export default App;
