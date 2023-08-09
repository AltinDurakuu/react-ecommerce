import React, {useState, useEffect} from "react";
import CheckoutUserData from "../components/CheckoutUserData";
import Payment from "../components/Payment";
import CheckoutProducts from "../components/CheckoutProducts";
import "./../styles/Checkout.css"
import axios from "../components/axios";


function Checkout(){
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: ''
      });
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userData)
      };
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
      
    return (
        <main className="full-block">
            <div className="checkoutContainer">
                <div className="checkoutFlex">
                    <CheckoutUserData handleInputChange={handleInputChange} handleSubmit={handleSubmit} name={userData.name}
                        email={userData.email} phoneNumber={userData.phoneNumber} address={userData.address} 
                    />
                    <CheckoutProducts />
                </div>
                <Payment userData={userData} />
            </div>
        </main>
    )
}

export default Checkout;