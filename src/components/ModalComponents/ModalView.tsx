import React, { useState } from "react";
import TechnologyBadge from "../TechnologyBadge";

// The handleModalClick and closeModal functions are passed down from the Modal component
// aboutClient and aboutProject are strings giving information about the client and the project
// linkIcons are icon names that are defined in technlogyLogos.js
const ModalView = ({ data, visible, handleModalClick, closeModal }) => {
  return (
    visible && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 modal-overlay flex items-center justify-center z-3"
        onClick={handleModalClick}
      >
        <div className="flex flex-col bg-white w-3/4 p-6 rounded shadow-md">
          <button
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost color-black align-self-end"
          >
            ✕
          </button>
          <div className="h-48">
            <img
              src={data.imgSource}
              className="h-full w-full object-contain justify-center"
              alt={data.projectTitle}
            ></img>
          </div>
          <h2 className="font-semibold mb-4 text-center">
            {data.projectTitle}
          </h2>
          <span>
            <span className="font-semibold">About {data.projectTitle}:</span>
            {data.aboutClient}
          </span>
          <span>
            <span className="font-semibold">Our Project: </span>
            {data.aboutProject}
          </span>
          <div className="mt-4 flex justify-end">
            {data.linkIcons.map((technology, index) => {
              return (
                <TechnologyBadge
                  badgeName={technology}
                  badgeText={technology}
                  link={data.linkDestinations[index]}
                />
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default ModalView;
