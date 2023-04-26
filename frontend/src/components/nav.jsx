import fanterlogo from "../images/fanterlogo.png";
import React from "react";

function Nav({ handleLoginClick }) {
    const handleClick = () => {
        handleLoginClick()
    };

    return (
    <div className="navbar">
        {/* <div className="logo-container">
            <img className="logo" src={fanterlogo} alt="logo"/>
        </div> */}

        <div>
            <span
                className="loginicon" onClick={handleClick}>Login</span>
        </div>
    </div>
    );
};
export default Nav;