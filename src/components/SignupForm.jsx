import React, { useState } from "react";
import "./../styles/SignupForm.css";
import axios from "axios";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
    address: "",
    terms: false,
  });
  const [errors, setErrors] = useState([]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    const errors = [];
    const data = new FormData();
    data.append('name', formData.name);
    data.append('username', formData.username);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('password', formData.password);
    data.append('password2', formData.password2);
    data.append('address', formData.password);
    data.append('terms', formData.message);
    // Perform additional client-side validations if needed

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    // Send the form data to the PHP backend using Axios
    axios
      .post("http://localhost/Api/signup.php", data)
      .then((response) => {
        const data = response.data;
        if (data.success) {
          console.log("User registration successful");
        } else {
          setErrors(data.errors || [data.message]);
        }
      })
      .catch((error) => {
        // Handle any network or server errors
        console.error("Error submitting the form:", error);
      });
  };


  return (
    <section className="signup full-block">
      <div className="container signup-content">
        <h2 className="signup-title">Sign up</h2>
        <form id="signupForm" className="signup-form" onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="username">Username </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="email">Email </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                type="number"
                placeholder="Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password2">Repeat Password</label>
              <input
                id="password2"
                type="password"
                placeholder="Repeat Password"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="signup_terms">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <label htmlFor="terms">
                Please indicate your consent for our company <br /> to utilize
                this data for internal application purposes.
              </label>
            </div>
          </div>
          <div>
            <p>
              You already have an account? <a href="login.html">Log In here</a>
            </p>
          </div>
          <button className="btn btn--form" type="submit" value="Signup">
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}

export default SignupForm;

