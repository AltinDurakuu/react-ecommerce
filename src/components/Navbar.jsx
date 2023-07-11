import React from "react";
import { NavLink } from 'react-router-dom';


function Navbar(){
    return (
        <header className="full-block">
            <div className="header-navigation-container" id="scroll-container">
                <div className="container">
                    <div className="navigation">
                        <div className="navigation-left-side">
                            <NavLink to="/"><img src="src/assets/logo.svg" width="200px" alt="" /></NavLink>                        
                        </div>
                        <div className="navigation-right-side">
                            <nav>
                            <ul>
                                <li>
                                    <NavLink to="/" className="active">Home</NavLink>                        
                                </li>
                                <li>
                                    <NavLink to="/clothes">Clothes</NavLink>                        
                                </li>
                                <li>
                                    <NavLink to="/accessories">Accessories</NavLink>                        
                                </li>
                                <li>
                                    <NavLink to="/contactUs">Contact Us</NavLink>                        
                                </li>
                                <li>
                                    <NavLink to="/login">Log In</NavLink>                        
                                </li>
                                <li>
                                    <NavLink to="/signup">Sign Up</NavLink>                        
                                </li>
                                <li>
                                    <NavLink to="/cart">
                                        <img src="src/assets/shopping-cart.svg" width="30px" alt=""/>
                                    </NavLink>                        
                                </li>
                            </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;