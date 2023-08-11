import React, {useState} from "react";
import "./../styles/ContactUs.css"
import axios from "./../components/axios";
import Notification from "./../components/Notification";

function ContactUs(){
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [showNotification, setShowNotification] = useState(false);
    const [notificationText, setNotificationText] = useState("");
  
    const closeNotification = () => {
      setShowNotification(false);
      setNotificationText("");
    };  

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };
      function handleSubmit(event) {
        event.preventDefault();
      
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('message', formData.message);
      
        axios
          .post("/contactus.php", data)
          .then((response) => {
                setNotificationText(response.data.message);
                setShowNotification(true);
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                })
            })
          .catch((error) => {
            console.error(error);
          });
      }
    return (
        <main className="full-block">
            <section className="contact-section">
                <div className="container">
                    <h1>Contact Us</h1>
                    <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" value={formData.name} onChange={handleChange} id="name" name="name" required />
                        </div>
            
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" value={formData.email} onChange={handleChange} id="email" name="email" required />
                        </div>
            
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" value={formData.message} onChange={handleChange} name="message" required></textarea>
                        </div>        
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
            {showNotification && <Notification show={showNotification} onClose={closeNotification} text={notificationText} />}
        </main>
    )
}

export default ContactUs;