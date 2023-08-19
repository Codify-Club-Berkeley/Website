import React from "react";
import TechnologyBadge from "../TechnologyBadge";

// The Modal component contains both the modal and the button that opens it
// The ProjectCard component contains the cards that display initially on the page and open the modal when clicked
// The ProjectInfo component contains the information that is displayed in the modal
// The technologies are displayed on the outer modal and the link icons are displayed on the inner modal

// Todo refactor so that there is only one modal that gets passed all of the information to better handle the modal state
const ModalButton = ({
  projectTitle,
  shortDescription,
  aboutClient,
  aboutProject,
  imgSource,
  technologies,
  linkIcons,
  linkDestinations,

  openModal,
}) => {
  return (
    <div className="flex items-center justify-center z-2">
      <button
        onClick={() =>
          openModal({
            projectTitle: projectTitle,
            shortDescription: shortDescription,
            aboutClient: aboutClient,
            aboutProject: aboutProject,
            imgSource: imgSource,
            technologies: technologies,
            linkIcons: linkIcons,
            linkDestinations: linkDestinations,
          })
        }
        className="bg-blue-500 text-black px-4 py-2 rounded"
      >
        <ProjectCard
          projectTitle={projectTitle}
          shortDescription={shortDescription}
          imgSource={imgSource}
          technologies={technologies}
        />
      </button>
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
  //   console.log(technologies);
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:-translate-y-3 duration-300 z-2">
      <figure>
        <img className="h-24 pt-2" src={imgSource} alt={projectTitle} />
      </figure>
      <div className="card-body">
        <h2 className="text-center">{projectTitle}</h2>
        <p className="text-sm">{shortDescription}</p>
        <div className="mt-4 flex flex-wrap">
          {technologies.map((technology) => {
            return (
              <TechnologyBadge badgeName={technology} badgeText={technology} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalButton;
