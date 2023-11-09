import React, { useState } from "react";

export default function Clickable(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const customStyle = {
    color: isHovered ? props.hoverColor : props.color,
    textDecoration: isHovered ? "underline" : "none", // Add underline on hover
    // transform: isHovered ? "translateY(-3px)" : "translateY(0)",
    transition: "color 0.3s, transform 0.3s, text-decoration 0.3s", // Add text-decoration to the transition
    // Add any other styles you want to customize here
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={customStyle}
    >
      {props.name}
    </div>
  );
}
