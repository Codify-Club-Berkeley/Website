import React, { useState } from "react";

// The Modal component contains both the modal and the button that opens it
// The ProjectCard component contains the cards that display initially on the page and open the modal when clicked
// The ProjectInfo component contains the information that is displayed in the modal

const Modal = ({ modalTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (event) => {
    // Check if the click occurred outside the modal content and not on modal buttons
    if (
      event.target.classList.contains("modal-overlay") &&
      !event.target.closest(".modal-content")
    ) {
      closeModal();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={openModal}
        className="bg-blue-500 text-black px-4 py-2 rounded"
      >
        <ProjectCard />
      </button>

      {isModalOpen && (
        <ProjectInfo
          handleModalClick={handleModalClick}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

// technologies is an array of strings that must be one of the technologies with a defined logo in src/data/technologyLogos.js
const ProjectCard = ({
  projectTitle,
  shortDescription,
  imgSource,
  technologies,
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:-translate-y-3 duration-300">
      <figure>
        <img
          className="h-24"
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/99/e5/11/99e5116c-acde-28ee-5b9b-0b70f3eab035/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-center">Project title</h2>
        <p className="text-sm">
          Add an iOS keyboard to allow you to use AI anywhere you type on your
          phone.
        </p>
        <div className="card-actions justify-end">
          <div className="flex-row badge badge-outline border-black h-8">
            <div className="flex items-center justify-center">
              <img
                className="h-5 w-1/3"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
                alt="Flask Icon"
              />
              <span className="flex-2 text-black text-center">Flask</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// The handleModalClick and closeModal functions are passed down from the Modal component
const ProjectInfo = ({ handleModalClick, closeModal, projectTitle }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 modal-overlay flex items-center justify-center"
      onClick={handleModalClick}
    >
      <div className="flex flex-col bg-white w-3/4 p-6 rounded shadow-md">
        <div className="h-48">
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/nike-motiva-lead-image-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill"
            className="h-full w-full object-contain justify-center"
            alt="Shoes"
          ></img>
        </div>
        <h2 className="font-semibold mb-4 text-center">Title</h2>
        <span>
          <span className="font-semibold">About Scribble: </span>
          Scribble is cool
        </span>
        <span>
          <span className="font-semibold">Our Project: </span>
          Scribble is cool
        </span>
        <div className="mt-4 flex justify-end">
          <button
            onClick={closeModal}
            className="bg-gray-300 px-3 py-1 rounded mr-2"
          >
            Close
          </button>
          <button className="bg-blue-500 text-black px-3 py-1 rounded">
            Save
          </button>
          <a
            className="text-decoration-none"
            href="https://apps.apple.com/us/app/scribble-ai/id1662081018?ref=producthunt"
          >
            <div className="card-actions">
              <div className="flex-row badge badge-outline border-black h-8">
                <div className="flex items-center justify-center">
                  <img
                    className="h-5 w-1/3"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
                    alt="Flask Icon"
                  />
                  <span className="flex-2 text-black text-center text-decoration-none">
                    View On App Store
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
