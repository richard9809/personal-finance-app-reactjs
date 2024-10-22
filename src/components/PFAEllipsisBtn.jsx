import { useState } from "react";
import IconEllipsis from "../components/icons/IconEllipsis";
import EditPotModal from "../components/modals/EditPotModal";
import DeletePotModal from "../components/modals/DeletePotModal";

const PFAEllipsisBtn = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const [showEditPotModal, setShowEditPotModal] = useState(false);

  const [showDeletePotModal, setShowDeletePotModal] = useState(false);

  const handleEditPotModal = () => {
    setShowEditPotModal(!showEditPotModal);
  };

  const handleDeletePotModal = () => {
    setShowDeletePotModal(!showDeletePotModal);
  };

  return (
    <>
      <div className="btn-dropdown">
        <button onClick={toggleDropdown}>
          <IconEllipsis />
        </button>

        <div
          className={`dropdown-content ${isDropdownVisible ? "show" : "hide"}`}
        >
          <div className="card">
            <div className="card-body">
              <div className="menu">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setDropdownVisible(false);
                    handleEditPotModal();
                  }}
                >
                  Edit Pot
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setDropdownVisible(false);
                    handleDeletePotModal();
                  }}
                >
                  Delete Pot
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showEditPotModal && <EditPotModal toggleModal={handleEditPotModal} />}
      {showDeletePotModal && (
        <DeletePotModal toggleModal={handleDeletePotModal} />
      )}
    </>
  );
};

export default PFAEllipsisBtn;
