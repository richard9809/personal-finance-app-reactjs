import PFACancelModalButton from "../PFACancelModalButton";
import PFADropdown from "../PFADropdown";
import PFAInputNumber from "../PFAInputNumber";
import PFAInputText from "../PFAInputText";

const AddNewPotModal = (props) => {
  return (
    <div className="modal">
      <div className="overlay" onClick={props.toggleModal}></div>
      <div className="modal-content">
        <div className="modal-flex-column">
          <div className="flex-between">
            <h2>Add New Pot</h2>
            <PFACancelModalButton toggleModal={props.toggleModal} />
          </div>
          <p>
            Create a pot to set savings targets. These can help keep you on
            track as you save for special purchases.
          </p>
          <div className="inputs">
            <div className="input">
              <label htmlFor="potName">Pot Name</label>
              <PFAInputText placeholder="e.g. Rainy Days" id="potName" />
              <span>30 of 30 characters left</span>
            </div>
            <div className="input">
              <label htmlFor="amount">Target</label>
              <PFAInputNumber placeholder="e.g. 2000" />
            </div>
            <div className="input">
              <label htmlFor="theme">Theme</label>
              <PFADropdown />
            </div>
          </div>
          <button className="primary-modal-btn">Add Pot</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewPotModal;
