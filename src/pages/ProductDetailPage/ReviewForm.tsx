import { useState } from "react";
import FormComponent from "../../components/FormComponent";

const ReviewFormComponent: React.FC = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleAddReview = (status: boolean) => {
    console.log("Form Saved " + status);
    console.log("isSaved " + isSaved);
    setIsSaved(true);
  };

  const handleClose = () => {
    setIsSaved(false);
    console.log("Form closed");
  };

  return (
    <>
      {isSaved === false ? (
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Write your review
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <FormComponent
                type="reviewForm"
                callback={handleAddReview}
              ></FormComponent>
            </div>
          </div>
        </div>
      ) : (
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">Form Saved Successfully!!!</div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewFormComponent;
