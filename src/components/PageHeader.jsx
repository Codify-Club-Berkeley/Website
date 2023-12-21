import React, { useState } from "react";

const PageHeader = ({ title, body }) => {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setGradientPosition({ x: e.clientX, y: e.clientY });
  };

  const gradientStyle = {
    // transition: "all 10s", // Adjust the transition duration
    background: `radial-gradient(circle at ${gradientPosition.x}px ${
      gradientPosition.y + 0
    }px, rgba(176, 88, 208,0.3) 0%, rgba(255,255,255,0) 50%)`,
    zIndex: -1, // Set the z-index of the gradient
  };

  return (
    <div
      className="bg-navbar-purple text-white p-8 md:p-16 sticky top-0 lg-shadow relative"
      style={{
        marginTop: "-120px",
        minHeight: "20rem",
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={gradientStyle} 
      />
      <h1 className="text-4xl md:text-5xl font-bold mt-32 mb-4 z-10">
        {title}
      </h1>
      <br />
      <p className="text-base md:text-lg font-medium mb-6 md:mr-64 z-10">
        {body}
      </p>
    </div>
  );
};

export default PageHeader;
