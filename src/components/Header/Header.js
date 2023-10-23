import "./Header.scss"


const Header = () => {
    return (
        <header className="navbar">
            <img className="navbarlogo" src="../../assets/logo" alt="logo"/>
        <div className="navbarContainer">
            <div className="navbarForm__Container">
                <form className="navbarInput">
                    <input type="search" id="bflixSearch" name="bflixSearch" placeholder="Search"></input>
                    <button className="navbarButton">UPLOAD</button>
                    <button className="navbarButtonB">UPLOAD</button>
                </form>
                
            </div>
            <img className="navbarAvi" src="" alt="avi"/>
            
        </div>
    </header>
    );
};
export default Header;