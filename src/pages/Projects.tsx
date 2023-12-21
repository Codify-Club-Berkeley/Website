import * as React from "react";
import { useState } from "react";
import "./Projects.css";
import { useMediaQuery } from "react-responsive";
import ModalButton from "../components/ModalComponents/ModalButton";
import ModalView from "../components/ModalComponents/ModalView";
import { allProjectsData, Project } from "../data/projectsData";
import { BADQUERY } from "dns";
import PageHeader from "../components/PageHeader";
import TextBlock from "../components/TextBlock";

// Todo lock height when adding more tiles

export default function ButtonBases() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 768px)", // Breakpoint
  });

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
      <PageHeader
        title="Projects"
        body="Projects are Codify’s lifeblood. Each semester, we give members the
        opportunity to work on projects ranging from full stack mobile and web
        development to building machine learning models."
      />
      {/* <div className="header text-center">
        <h1>
          <span style={{ color: "#9641FD" }}>Codify's</span> Work
        </h1>
      </div> */}
      <div className="body m-4">
        <TextBlock
          title="Continued Support"
          text=" We actively maintain all of projects to ensure a product that people
          will continue to use for years to come. This not only ensures all of
          our hand work isn't for nothing, but it encourages writing
          maintainable code and minimizing technical debt. If you see a project
          here you would like to work on, you can!
"
          isMobile={isMobileDevice}
          marginLeft={isMobileDevice ? "0px" : "100px"}
          marginRight={isMobileDevice ? "0px" : "200px"}
        />
      </div>
      <hr className="border-b-2 border-purple-500" />
      <div
        style={{ background: "linear-gradient(to bottom, white, #d9d9d9 )" }}
      >
        <div className="body flex flex-wrap  justify-center">
          <h2>Current Projects</h2>
        </div>

        <ModalView
          visible={isModalOpen}
          data={modalData}
          handleModalClick={handleModalClick}
          closeModal={closeModal}
        ></ModalView>

        {/* Current Projects */}
        <div
          style={{
            marginLeft: "10rem",
            marginRight: "10rem",
          }}
          className="flex flex-wrap justify-center p-4"
        >
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
      </div>
      <div
        style={{ background: "linear-gradient(to bottom,#d9d9d9,  white )" }}
      >
        <div className="body flex flex-wrap p-4 mt-1">
          <h2>Past Projects</h2>
        </div>
        <div
          style={{ marginLeft: "10rem", marginRight: "10rem" }}
          className="flex flex-wrap justify-center"
        >
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
    </div>
  );
}
