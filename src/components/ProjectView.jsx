import React from "react";

export function ProjectView2(projectTitle) {
  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button
        className="btn h-100"
        onClick={() => window.my_modal_1.showModal()}
      >
        {/** Button Contents to Open the Modal */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="rounded-b-lg h-25"
              src="https://media.cnn.com/api/v1/images/stellar/prod/nike-motiva-lead-image-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center">Project title</h2>
            <p className="text-sm">
              Add an iOS keyboard to allow you to use AI anywhere you type on
              your phone.
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
      </button>

      <dialog id="my_modal_1" className="modal-middle bg-transparent">
        <form
          method="dialog"
          className="modal-box bg-white rounded-lg border-hidden z-10"
        >
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/nike-motiva-lead-image-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill"></img>
          <h3 className="text-black"> Title</h3>
          <p className="text-black">
            Press ESC key or click the button below to close
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
        </form>
        <form
          method="dialog"
          className="modal-backdrop opacity-0 hover:opacity-70"
        >
          {/* The modal background is taking up the whole screen, as visible by changing the opacity */}
          <button>Hi there</button>
        </form>
      </dialog>
    </>
  );
}
