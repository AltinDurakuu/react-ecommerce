import React from "react";
import { NavLink } from "react-router-dom";

function DiscoverCategory1(props){
    const scrollToSection = (sectionId, targetPosition = 0) => {
        console.log(sectionId)
        const section = document.getElementById(sectionId);
        if (section) {
          if (targetPosition > 0) {
            const targetPosition = section.offsetTop - 100;
            window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
            });
            }else{
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
      };
    return (
        <div className="category-description">
            <div className="category-description_content">
                <h2>{props.name}</h2>
                <span>Best trending 2023</span><br/>
                {props.To ? <NavLink to={props.To}>Discover Store</NavLink> :
                <a onClick={() => scrollToSection(props.link, 1)}>Discover Store</a>}
            </div>
        </div>
    )
}

export default DiscoverCategory1;