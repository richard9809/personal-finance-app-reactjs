import PFACancelModalButton from "../PFACancelModalButton";
import PFADropdown from "../PFADropdown";
import PFAInputNumber from "../PFAInputNumber";
import PFAInputText from "../PFAInputText";

const EditPotModal = (props) => {
  return (
    <div className="modal">
      <div className="overlay" onClick={props.toggleModal}></div>
      <div className="modal-content">
        <div className="modal-flex-column">
          <div className="flex-between">
            <h2>Edit Pot</h2>
            <PFACancelModalButton toggleModal={props.toggleModal} />
          </div>
          <p>If your saving targets change, feel free to update your pots.</p>
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
          <button className="primary-modal-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default EditPotModal