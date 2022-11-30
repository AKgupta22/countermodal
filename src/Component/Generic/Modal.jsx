import React from "react";

export default function Modal({ text, Handler, currValue }) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Set Counter Status
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {currValue > 0 && (
              <button className="btn btn-sm w-100 btn-danger text-light text-center mb-3">
                Current Value : {currValue}
              </button>
            )}
            <button
              className="btn btn-sm w-100 btn-primary text-light text-center"
              onClick={Handler}
            >
              {text}
            </button>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
