import PFAEllipsisBtn from "../components/PFAEllipsisBtn";
import ProgressBar from "../components/ProgressBar";
import JsonData from "../../data.json";
import AddNewPotModal from "../components/modals/AddNewPotModal";
import { useState } from "react";
import AddMoneyModal from "../components/modals/AddMoneyModal";
import WithdrawModal from "../components/modals/WithdrawModal";

const Pots = () => {
  const pots = JsonData.pots;

  const [showAddPotModal, setShowAddPotModal] = useState(false);
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);  

  const handleAddPotModal = () => {
    setShowAddPotModal(!showAddPotModal);
  };

  const handleAddMoneyModal = () => {
    setShowAddMoneyModal(!showAddMoneyModal);
  };

  const handleWithdrawModal = () => {
    setShowWithdrawModal(!showWithdrawModal);
  };

  const cardPots = pots.map((card) => {
    const progressPercentage = Math.round((card.total / card.target) * 100);

    return (
      <div key={card.id} className="card">
        <div className="card-header">
          <div className="flex-between">
            <div className="section-1">
              <div
                style={{
                  backgroundColor: card.theme,
                }}
              ></div>
              <h2>{card.name}</h2>
            </div>
            <PFAEllipsisBtn />
          </div>
        </div>
        <div className="card-body">
          <div className="progress-info">
            <div className="section-1 flex-between">
              <p>Total Saved</p>
              <p>
                $
                {Number(card.total).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="progress-section">
              <ProgressBar theme={card.theme} progress={progressPercentage} />
              <section className="flex-between">
                <p>{progressPercentage}%</p>
                <p>Target of ${card.target.toLocaleString()}</p>
              </section>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="buttons">
            <button onClick={handleAddMoneyModal}>
              <span>+ Add Money</span>
            </button>
            <button onClick={handleWithdrawModal}>
              <span>Withdraw</span>
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="pots-page">
        <div className="section-1 flex-between">
          <h1>Pots</h1>
          <button onClick={handleAddPotModal}>+ Add New Pot</button>
        </div>
        <div className="section-2">{cardPots}</div>
      </div>

      {showAddPotModal && <AddNewPotModal toggleModal={handleAddPotModal} />}
      {showAddMoneyModal && <AddMoneyModal toggleModal={handleAddMoneyModal} />}
      {showWithdrawModal && <WithdrawModal toggleModal={handleWithdrawModal} />}
    </>
  );
};

export default Pots;
