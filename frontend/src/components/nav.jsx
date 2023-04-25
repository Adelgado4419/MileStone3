import fanterlogo from "../images/fanterlogo.png";

const Nav = () => {
    const handleClick = () => {
    };

    return (
    <nav>
        <div className="logo-container">
        <img className="logo" src={fanterlogo} alt="logo"
        />
        </div>
        <button
            className="nav-button"
            onClick={handleClick}
        >
            Login
        </button>
        
    </nav>
    );
};
export default Nav;