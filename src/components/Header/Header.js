const Header = () => {
    return (
        <header className="navbar">
        <div className="navbarContainer">
            <img className="navbarlogo" href="../unique-dismuke-brainflix/src/assets/logo/BrainFlix-logo.svg" alt="logo"/>
            <div className="navbarForm__Container">
                <form className="navbarInput">
                    <input type="search" id="bflixSearch" name="bflixSearch"></input>
                </form>
                <img className="navbarAvi" src="../unique-dismuke-brainflix/src/assets/logo/BrainFlix-logo.svg"/>
            </div>
            <button className="navbarButton">UPLOAD</button>
        </div>
    </header>
    );
};
export { Header };