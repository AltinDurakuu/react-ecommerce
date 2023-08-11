import React, { useState, useEffect, useContext } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "./axios";
import "./../styles/Payment.css";
import Notification from "./../components/Notification";
import { AppContext } from "./AppContext";

function Payment({ userData }) {
  const [checkoutCartItems, setCheckoutCartItems] = useState([]);
  const { cartItems, setCartItems } = useContext(AppContext);
  

  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const closeNotification = () => {
    setShowNotification(false);
    setNotificationText("");
  }; 

  useEffect(() => {
    const cartItemsData = JSON.parse(localStorage.getItem("cartItems"));
    setCheckoutCartItems(cartItemsData);
  }, []);

  const createOrder = async (data, actions) => {
    try {
        const productIdsAndQuantities = checkoutCartItems.map((item) => ({
            productId: item.productId,
            quantity: item.quantity
        }));
      
     const response = await axios.post('/checkout.php', {
            name: userData.name,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            address: userData.address,
            productIdsAndQuantities: productIdsAndQuantities
        }, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        }
        )
        const totalAmount = parseFloat(response.data.totalAmount).toFixed(2);;
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: totalAmount,
                    },
                },
            ],
        });
    } catch (error) {
        console.error("Error calculating total amount:", error);
        return null;
    }
};

const onApprove = async (data, actions) => {
    try {  
    const productIdsAndQuantities = checkoutCartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity
    }));
     const response = await axios.post('/order.php', {
            name: userData.name,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            address: userData.address,
            productIdsAndQuantities: productIdsAndQuantities
        }, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        }
        )
        setNotificationText(response.data.message);
        setShowNotification(true);
        setCheckoutCartItems([]);
        setCartItems([])
        localStorage.removeItem('cartItems');
        return actions.order.capture().then(function(details){
          console.log(details)
        });
    } catch (error) {
        console.error("Error calculating total amount:", error);
        return null;
    }
};
  
  return (
    <div className="full-block">
      <div className="paymentButtons">
        <PayPalScriptProvider options={{ clientId: "AUxYUl3I6Uev8zL9tMUd1BkLovukpM1HjpSlxHRAtroUGAM3eDZImFaUU8Wui523HMgvfFywxbSuWjpL" }}>
          <PayPalButtons
            forceReRender={[userData]}
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        </PayPalScriptProvider>
      </div>
      {showNotification && <Notification show={showNotification} onClose={closeNotification} text={notificationText} />}
    </div>
  );
}

export default Payment;