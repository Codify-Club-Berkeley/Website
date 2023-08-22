import * as React from "react";
import { useState } from "react";
import "./Projects.css";
import ModalButton from "../components/ModalComponents/ModalButton";
import ModalView from "../components/ModalComponents/ModalView";
import { allProjectsData, Project } from "../data/projectsData";

// Todo lock height when adding more tiles

export default function ButtonBases() {
  //setting showModal to zero will not show any modal, setting it to a number
  //larger than zero will show that particular modal

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Proof of concept
  const [modalData, setModalData] = useState({});

  const openModal = (data: Project) => {
    setModalData(data);
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
    <div>
      <div className="header">
        <h1>
          <span style={{ color: "#9641FD" }}>Codify's</span> Work
        </h1>
      </div>

      <div className="body">
        <p>
          Every semester, Codify gives members the opportunity to work on a new
          project. We don’t limit ourselves to any one domain of computer
          science or any one type of project. Most of our projects fall under
          three main categories: internal, non-profit client, and for-profit
          client. For-profit clients pay Codify to complete a project that
          assists their business. Non-profit client projects are completed
          pro-bono for an organization with a mission that Codify supports.
          Internal projects are either an individual member's personal passion
          project, or a startup being launched through the club.
        </p>
        <h1>Continued Support</h1>
        <p>
          Unlike many other organizations, we only work on projects that are
          likely to result in a product that people will continue to use for
          years to come. We actively update and maintain all of our projects.
          This not only ensures all of our hand work isn't for nothing, but it
          encourages writing maintainable code and minimizing technical debt. If
          you see a project here you would like to work on, you can!
        </p>
      </div>
      <div className="body">
        <h2>Current Projects</h2>
      </div>

      <ModalView
        visible={isModalOpen}
        data={modalData}
        handleModalClick={handleModalClick}
        closeModal={closeModal}
      ></ModalView>

      {/* Current Projects */}
      <div className="flex flex-wrap place-content-center">
        {allProjectsData
          .filter((project) => project.currentProject)
          .map((project) => {
            return (
              <ModalButton
                projectTitle={project.projectTitle}
                shortDescription={project.shortDescription}
                aboutClient={project.aboutClient}
                aboutProject={project.aboutProject}
                imgSource={project.imgSource}
                technologies={project.technologies}
                linkIcons={project.linkIcons}
                linkDestinations={project.linkDestinations}
                openModal={openModal}
              ></ModalButton>
            );
          })}
      </div>

      <div className="body">
        <h2>Past Projects</h2>
      </div>

      {/* Current Projects */}
      <div className="flex flex-wrap place-content-center">
        {allProjectsData
          .filter((project) => !project.currentProject)
          .map((project) => {
            return (
              <ModalButton
                projectTitle={project.projectTitle}
                shortDescription={project.shortDescription}
                aboutClient={project.aboutClient}
                aboutProject={project.aboutProject}
                imgSource={project.imgSource}
                technologies={project.technologies}
                linkIcons={project.linkIcons}
                linkDestinations={project.linkDestinations}
                openModal={openModal}
              ></ModalButton>
            );
          })}
      </div>
    </div>
  );
}
