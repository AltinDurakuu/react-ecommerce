import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./../styles/Payment.css"


function Payment(){
    return (
        <div className="full-block">
            <div className="paymentButtons">
                <PayPalScriptProvider options={{ clientId: "test" }}>
                    <PayPalButtons />
                </PayPalScriptProvider>
            </div>
        </div>
    )
}

export default Payment;