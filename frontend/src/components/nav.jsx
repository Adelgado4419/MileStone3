import fanterlogo from "../images/fanterlogo.png";

const Nav = () => {
    const handleClick = () => {
    };

    return (
    <nav>
        <button
            className="nav__login"
            onClick={handleClick} >
            Log In
        </button>
        <div className="logo-container">
        <img className="nav__logo" src={fanterlogo} alt="logo"
        />
        </div>

        <div></div>
        
        <button
            className="nav__signup"
            onClick={handleClick}
        >
            Sign Up
        </button>

        
        
    </nav>
    );
};
export default Nav;