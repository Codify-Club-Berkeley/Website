import React from "react";

const FilmStrip = ({ images }) => {
  return (
    <div className="flex overflow-x-auto">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Film Strip ${index + 1}`}
          className="h-48 object-cover mr-2"
        />
      ))}
    </div>
  );
};

export default FilmStrip;
