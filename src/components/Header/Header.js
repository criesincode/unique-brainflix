import "./Header.scss"
import MohanMurugeImage from "../../assets/images/Mohan-muruge.jpg";
import bflixLogo from "../../assets/logo/BrainFlix-logo.svg"

const Header = () => {
    return (
        <header className="navbar">
            <img className="navbarlogo" src={bflixLogo}alt="logo"/>
        <div className="navbarContainer">
            <div className="navbarForm__Container">
                <form className="navbarInput">
                    <input type="search" id="bflixSearch" name="bflixSearch" placeholder="Search"></input>
                    <button className="navbarButton">UPLOAD</button>
                    <button className="navbarButtonB">UPLOAD</button>
                </form>
                
            </div>
            <img className="navbarAvi" src={MohanMurugeImage} alt="avi"/>
            
        </div>
    </header>
    );
};
export default Header;