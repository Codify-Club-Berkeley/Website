import React from "react";

const FilmStrip = ({ images }) => {
  return (
    <div className="flex gap-2 overflow-x-auto fade-in px-1">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Film Strip ${index + 1}`}
          className="h-80 object-cover "
        />
      ))}
    </div>
  );
};

export default FilmStrip;
