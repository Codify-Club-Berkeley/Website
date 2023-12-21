import React from "react";

const PageBanner = ({ backgroundImage, title }) => {
  return (
    <div
      className="large-banner relative flex items-end justify-center bg-cover bg-center w-full fade-in"
      style={{
        marginTop: "-50px",
        backgroundImage: `url(${backgroundImage})`,
        height: "35rem",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        style={{ mixBlendMode: "multiply" }} // Add this style for blending
      ></div>

      <div className="z-10 header-overlay text-white body-section flex flex-col text-center w-75 text-shadow-lg">
        <h1 className="text-white text-5xl md:text-5xl p-4 mb-8">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageBanner;
