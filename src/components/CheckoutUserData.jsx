import React, { useState, useEffect } from 'react';
import "./../styles/CheckoutUserData.css"

function CheckoutUserData (){
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //probably gonna remove the submit button
  };

  return (
    <form className='checkoutForm' onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={userData.phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Address:
        <textarea
          name="address"
          value={userData.address}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckoutUserData;
