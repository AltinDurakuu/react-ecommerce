import React, {useState, useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginForm.css"
import axios from "axios";
import { AppContext } from "./AppContext";

function LoginForm(){
    const [formData, setFormData] = useState({
        login_username_email: "",
        login_password: ""
      });
    const { isUserLogged, setIsUserLogged, handleLoginToken } = useContext(
      AppContext
    );


    const navigate  = useNavigate();
    
    useEffect(() => {
      if (isUserLogged) {
        navigate("/");
      }
    }, [isUserLogged, navigate]);

    const handleChange = (e) => {
        const { name, value} = e.target;
    
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
         
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          data.append(key, value);
        });
      
        axios
          .post("http://localhost/Api/login2.php", data)
          .then((response) => {
            const loggedIn = JSON.parse(response.data.loggedin);
            setIsUserLogged(loggedIn);
            localStorage.setItem("isUserLogged", loggedIn);
            if (loggedIn) {
              handleLoginToken(response.data.token);
              localStorage.setItem("user", JSON.stringify(response.data.user));
              navigate("/");
            }
            console.log(response)
          })
          .catch((error) => {
            console.error("Error submitting the form:", error);
          });
      };
    

    return (
        <section className="login full-block">
            <div className="container login-content">
                <h2 className="login-title">Log in</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="login_username_email">Username or email</label>
                        <input id="login_username_email" onChange={handleChange} value={formData.login_username_email} type="text" placeholder="Username or Email" name="login_username_email" required />
                    </div>
                    <div>
                        <label htmlFor="login_password">Password</label>
                        <input id="login_password" onChange={handleChange} value={formData.login_password} type="password" placeholder="password" name="login_password" required/>
                    </div>
                    <div>
                        <p>You don't have an acccount? <Link to={"./../signup"}>Sign Up here</Link></p>
                    </div>
                    <button className="btn btn--form" type="submit" value="Log in">Log in</button>
                </form>
            </div>
        </section>
    )
}

export default LoginForm;