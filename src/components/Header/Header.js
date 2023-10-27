import "./Header.scss"
import MohanMurugeImage from "../../assets/images/Mohan-muruge.jpg";
import bflixLogo from "../../assets/logo/BrainFlix-logo.svg"
import searchIcon from "../../assets/icons/search.svg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar">
            <img className="navbar__logo" src={bflixLogo} alt="logo" />
            <div className="navbar__container">
                <div className="navbar-form__container">
                    <form className="navbar__input">
                        <input type="search" id="bflixSearch" name="bflixSearch" placeholder="Search" src={searchIcon} ></input>
                        <button className="navbar__button">UPLOAD</button>
                        <button className="navbar__button--b">UPLOAD</button>
                    </form>
                </div>
                <img className="navbar__avi" src={MohanMurugeImage} alt="avi" />
            </div>

            <Link to="/upload" className="navbar__button navbar__button--b">
                UPLOAD
            </Link>
        </header>
    );
};
export default Header;