import React from "react";

function DiscoverCategory1(props){
    return (
        <div className="category-description">
            <div className="category-description_content">
                <h2>{props.name}</h2>
                <span>Best trending 2023</span><br/>
                <a href={props.link}>Discover Store</a>
            </div>
        </div>
    )
}

export default DiscoverCategory1;