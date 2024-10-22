import PFACancelModalButton from "../PFACancelModalButton";

const DeletePotModal = (props) => {
  return (
    <div className="modal">
      <div className="overlay" onClick={props.toggleModal}></div>
      <div className="modal-content">
        <div className="modal-flex-column">
          <div className="flex-between">
            <h2>Delete &apos;Savings&apos; ?</h2>
            <PFACancelModalButton toggleModal={props.toggleModal} />
          </div>
          <p>
            Are you sure you want to delete this pot? This action cannot be
            reversed, and all the data inside it will be removed forever.
          </p>
          <button className="secondary-modal-btn">Yes, Confirm Deletion</button>
          <button className="tertiary-modal-btn">No, Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default DeletePotModal;
