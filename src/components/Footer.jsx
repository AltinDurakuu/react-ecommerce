import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Footer.css"

function Footer(){
    const isUserLoggedLS = localStorage.getItem("isUserLogged") === "true";
    return (
        <footer className="footer-section full-block">
            <div className="container">
                <div className="footer-section-left-side">
                    <ul>
                    <li><NavLink to="#"><i className="fa-brands fa-facebook"></i></NavLink></li>
                    <li><NavLink to="#"><i className="fa-brands fa-instagram"></i></NavLink></li>
                    </ul>
                    <p>name@gmail.com</p>
                    <p>044 132 132</p>
                </div>
                <div className="footer-section-center">
                    <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/clothes">Clothes</NavLink></li>
                    <li><NavLink to="/contactus">Contact Us</NavLink></li>
                    {!isUserLoggedLS && <li><NavLink to="/login">Log In</NavLink></li>}
                    {!isUserLoggedLS && <li><NavLink to="/signup">Sign Up</NavLink></li>}
                    </ul>
                </div>
                <div className="footer-section-right-side">
                    <li><NavLink to="/"><img src="./../src/assets/logo-white.svg" width="200px" alt="" /></NavLink></li>
                </div>
            </div>
        </footer>
    )
}

export default Footer;