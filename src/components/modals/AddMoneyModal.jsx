import PFACancelModalButton from "../PFACancelModalButton";
import PFAInputNumber from "../PFAInputNumber";

const AddMoneyModal = (props) => {
  return (
    <div className="modal">
      <div className="overlay" onClick={props.toggleModal}></div>
      <div className="modal-content">
        <div className="modal-flex-column">
          <div className="flex-between">
            <h2>Add to &apos;Savings&apos;</h2>
            <PFACancelModalButton toggleModal={props.toggleModal} />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet.
          </p>
          <div className="progress-info">
            <div className="section-1 flex-between">
              <p>New Amount</p>
              <p>$559.00</p>
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <label htmlFor="amount">Amount to Add</label>
              <PFAInputNumber placeholder="e.g. 2000" />
            </div>
          </div>
          <button className="primary-modal-btn">Confirm Addition</button>
        </div>
      </div>
    </div>
  );
};

export default AddMoneyModal;
