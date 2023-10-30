import "./Header.scss"
import MohanMurugeImage from "../../assets/images/Mohan-muruge.jpg";
import bflixLogo from "../../assets/logo/BrainFlix-logo.svg"
import searchIcon from "../../assets/icons/search.svg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar">
            <Link to="/">
            <img className="navbar__logo" src={bflixLogo} alt="logo" />
            </Link>
            <div className="navbar__container">
                <div className="navbar-form__container">
                    <form className="navbar__input">
                        <input type="search" id="bflixSearch" name="bflixSearch" placeholder="Search" src={searchIcon} ></input>
                        <Link to="/upload">
                        <button className="navbar__button">UPLOAD</button>
                        </Link>
                    </form>
                </div>
                <Link to="/upload">
                <button className="navbar__button--b">UPLOAD</button>
                </Link>
                <img className="navbar__avi" src={MohanMurugeImage} alt="avi" />
            </div>
        </header>
    );
};
export default Header;