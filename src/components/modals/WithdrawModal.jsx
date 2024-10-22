import PFACancelModalButton from "../PFACancelModalButton";
import PFAInputNumber from "../PFAInputNumber";

const WithdrawModal = (props) => {
  return (
    <div className="modal">
      <div className="overlay" onClick={props.toggleModal}></div>
      <div className="modal-content">
        <div className="modal-content">
          <div className="modal-flex-column">
            <div className="flex-between">
              <h2>Withdraw from &apos;Savings&apos;</h2>
              <PFACancelModalButton toggleModal={props.toggleModal} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet.
            </p>
            <div className="inputs">
              <div className="input">
                <label htmlFor="amount">Amount to Add</label>
                <PFAInputNumber placeholder="e.g. 2000" />
              </div>
            </div>
            <button className="primary-modal-btn">Confirm Withdrawal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal;
