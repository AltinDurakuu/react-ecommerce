import React, {useContext} from "react";
import { NavLink } from 'react-router-dom';
import "../styles/base.css"
import "../styles/Navbar.css";
import { AppContext } from "./AppContext";


function Navbar(){
    const { isUserLogged, setIsUserLogged } = useContext(AppContext);
    function logOut(){
        setIsUserLogged(false);
        console.log(isUserLogged)
    }
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
                                    <NavLink className="page" to="/">Home</NavLink>                        
                                </li>
                                <li>
                                    <NavLink className="page"  to="/clothes">Clothes</NavLink>                        
                                </li>
                                <li>
                                    <NavLink className="page"  to="/accessories">Accessories</NavLink>                        
                                </li>
                                <li>
                                    <NavLink className="page"  to="/contactUs">Contact Us</NavLink>                        
                                </li>
                                <li>
                                    {!isUserLogged && <NavLink className="page"  to="/login">Log In</NavLink>   }                     
                                </li>
                                <li>
                                    {!isUserLogged && <NavLink className="page"  to="/signup">Sign Up</NavLink>  }                      
                                </li>
                                <li>
                                    {isUserLogged && <NavLink onClick={logOut} to="/"  className="custom-active-class">Log Out</NavLink>  }                      
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