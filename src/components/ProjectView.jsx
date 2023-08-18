import React from "react";

export default function ProjectView() {
  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button className="btn" onClick={() => window.my_modal_1.showModal()}>
        open modal
      </button>
      <dialog id="my_modal_1" className="modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
        </form>
        <form method="dialog" className="modal-backdrop bg-transparent">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
