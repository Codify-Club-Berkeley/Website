//Modal.js
/**Referenced https://javascript.plainenglish.io/how-to-create-a-popup-modal-in-react-39315907998e for help */

import React, { useRef } from "react";
import ReactDom from "react-dom";

import "./ProjectModal.css";

export const ProjectModal = ({ setShowModal, projectData }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(0);
    }
  };
  //render the modal JSX in the portal div.
  return (
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <button className="close" onClick={() => setShowModal(0)}>
          X
        </button>
        <div className="content">
          <a href={projectData.clientWebsiteUrl} target="_blank">
            <img className="image" src={projectData.projectImageUrl}></img>
          </a>

          <h2>{projectData.projectTitle}</h2>
          <p>{projectData.clientDescription}</p>
          <p>{projectData.projectDescription}</p>
          <p>{projectData.technologiesUsed}</p>
        </div>
      </div>
    </div>
  );
};
