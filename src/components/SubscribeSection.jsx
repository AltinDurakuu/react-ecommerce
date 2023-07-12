import React, {useState} from "react";
import "../styles/SubscribeSection.css"
import axios from "axios";

function SubscribeSection(){
    const [email, setEmail] = useState("")
        
    function handleChange(event) {
        setEmail(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (email.length > 0) {
          const encodedEmail = encodeURIComponent(email);
          const url = `http://localhost/Api/insert_email.php?email=${encodedEmail}`;
      
          axios.get(url)
            .then(response => {
              console.log('Email inserted successfully');
              alert("Thanks for subscribing")
            })
            .catch(error => {
              console.error(error);
            });
        }
        setEmail("");
      }

    return (
        <section className="subscribe-section full-block">
            <div className="container">
                <div className="subscribe-section-flex-container">
                    <div className="subscribe-section-flex-container_left-side">
                        <h4>Autumn / Winter Sale</h4>
                        <p>Subscribe and Take 40% Off On Women’s</p>
                    </div>
                    <div className="subscribe-section-flex-container_right-side">
                        <form onClick={handleSubmit}>
                            <input type="email" required onChange={handleChange} value={email} name="email" id="email-input" placeholder="Enter your email address" />
                            <button id="subscribe-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection