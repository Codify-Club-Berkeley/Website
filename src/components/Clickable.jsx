import React from "react";

export default function Clickable(props) {
    
    function changeColor(x) {
        x.target.style.color = props.color;
    }
    function changeBack(x) {
        x.target.style.color = 'white';
    }
    
    return (
        <div color='white' onMouseOver={changeColor} onMouseLeave={changeBack}>{props.name}
        
        </div>

    );
}