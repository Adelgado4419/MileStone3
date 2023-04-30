import fanterlogo from "../images/fanterlogo.png";
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div>
                <Link to='/login' className="nav__login">
                <h5>log in</h5>
                </Link>
        <div className="logo-container">
        <img className="nav__logo" src={fanterlogo} alt="logo"/>
        </div>
                <Link to='/signup' className="nav__signup">
                <h5>sign up</h5>
                </Link>
        </div>
    );
};
export default Nav;