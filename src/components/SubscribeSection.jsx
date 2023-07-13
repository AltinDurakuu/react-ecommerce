import React, { useState } from "react";
import "../styles/SubscribeSection.css";
import axios from "axios";

function SubscribeSection() {
  const [email, setEmail] = useState("");

  function handleChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    axios
      .post("http://localhost/Api/insert_email.php", formData)
      .then((response) => {
        console.log(response.data);
        // Handle successful response
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
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
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                required
                onChange={handleChange}
                value={email}
                name="email"
                id="email-input"
                placeholder="Enter your email address"
              />
              <button type="submit" id="subscribe-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribeSection;
