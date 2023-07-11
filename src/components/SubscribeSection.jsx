import React from "react";

function SubscribeSection(){
    return (
        <section className="subscribe-section full-block">
            <div className="container">
                <div className="subscribe-section-flex-container">
                    <div className="subscribe-section-flex-container_left-side">
                        <h4>Autumn / Winter Sale</h4>
                        <p>Subscribe and Take 40% Off On Women’s</p>
                    </div>
                    <div className="subscribe-section-flex-container_right-side">
                        <form>
                            <input type="email" name="" id="email-input" placeholder="Enter your email address" />
                            <input type="button" id="subscribe-btn" value="Subscribe!" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection