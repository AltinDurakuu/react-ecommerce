import React from "react";
import CheckoutUserData from "../components/CheckoutUserData";
import Payment from "../components/Payment";
import CheckoutProducts from "../components/CheckoutProducts";
import "./../styles/Checkout.css"


function Checkout(){
    return (
        <main className="full-block">
            <div className="checkoutContainer">
                <div className="checkoutFlex">
                    <CheckoutUserData />
                    <CheckoutProducts />
                </div>
                <Payment />
            </div>
        </main>
    )
}

export default Checkout;