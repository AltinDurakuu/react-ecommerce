import React, {useState, useEffect, useContext} from "react";
import CheckoutUserData from "../components/CheckoutUserData";
import Payment from "../components/Payment";
import CheckoutProducts from "../components/CheckoutProducts";
import "./../styles/Checkout.css"
import axios from "../components/axios";
import { AppContext } from "./../components/AppContext";

function Checkout(){
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: ''
      });
      const { cartItems, setCartItems } = useContext(AppContext);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      
      const token = localStorage.getItem('token');

      useEffect(() => {
        if (token) {
          axios
            .post("/getUserData.php", { token }, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              console.log(response)
              if (response.data.message === "User found") {
                setUserData(response.data.user);
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }, []);

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
                    <CheckoutUserData handleInputChange={handleInputChange} name={userData.name}
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