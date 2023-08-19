import * as React from "react";
import Box from "@mui/material/Box";
import ProjectButton from "../components/ProjectButton";
import { useState } from "react";
import { ProjectModal } from "../components/ProjectModal";
import "./Projects.css";
import ProjectView from "../components/ProjectView";
import ModalButton from "../components/ModalComponents/ModalButton";
import ModalView from "../components/ModalComponents/ModalView";

export default function ButtonBases() {
  //setting showModal to zero will not show any modal, setting it to a number
  //larger than zero will show that particular modal

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Proof of concept
  const [modalData, setModalData] = useState({
    date: new Date(),
  });

  const openModal = () => {
    setModalData({
      date: new Date(),
    });
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
      <div className="flex flex-wrap place-content-center">
        <ModalView
          visible={isModalOpen}
          handleModalClick={handleModalClick}
          closeModal={closeModal}
          projectTitle={"t1"}
          shortDescription={"Short Description"}
          aboutClient={"About Client"}
          aboutProject={"About Project"}
          imgSource={
            "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/99/e5/11/99e5116c-acde-28ee-5b9b-0b70f3eab035/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp"
          }
          technologies={["React Native", "Flask", "Swift"]}
          linkIcons={["Website"]}
          linkDestinations={["https://www.scribbleai.net/"]}
          data={modalData.date.toString()}
        ></ModalView>
        <ModalButton
          projectTitle={"t1"}
          shortDescription={"Short Description"}
          aboutClient={"About Client"}
          aboutProject={"About Project"}
          imgSource={
            "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/99/e5/11/99e5116c-acde-28ee-5b9b-0b70f3eab035/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp"
          }
          technologies={["React Native", "Flask", "Swift"]}
          linkIcons={["Website"]}
          linkDestinations={["https://www.scribbleai.net/"]}
          openModal={openModal}
          closeModal={closeModal}
        ></ModalButton>
      </div>
    </div>
  );
}
