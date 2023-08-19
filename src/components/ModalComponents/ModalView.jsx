import TechnologyBadge from "../TechnologyBadge";

// The handleModalClick and closeModal functions are passed down from the Modal component
// aboutClient and aboutProject are strings giving information about the client and the project
// linkIcons are icon names that are defined in technlogyLogos.js
const ModalView = ({
  visible,
  handleModalClick,
  closeModal,
  projectTitle,
  imgSource,
  aboutClient,
  aboutProject,
  linkIcons,
  linkDestinations,
  data,
}) => {
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
              src={imgSource}
              className="h-full w-full object-contain justify-center"
              alt="Shoes"
            ></img>
          </div>
          <h2 className="font-semibold mb-4 text-center">{projectTitle}</h2>
          <span>
            <span className="font-semibold">
              About {projectTitle}: {data}
            </span>
            {aboutClient}
          </span>
          <span>
            <span className="font-semibold">Our Project: </span>
            {aboutProject}
          </span>
          <div className="mt-4 flex justify-end">
            {linkIcons.map((technology, index) => {
              return (
                <TechnologyBadge
                  badgeName={technology}
                  badgeText={technology}
                  link={linkDestinations[index]}
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
