import IconCaretDown from "./icons/IconCaretDown";
import IconFilterMobile from "./icons/IconFilterMobile";

const PFAFilterButton = () => {
  return (
    <div className="filter-button">
      <label htmlFor="category">Category</label>
      <button id="category">
        <div className="mobile-layout">
          <IconFilterMobile />
        </div>

        <div className="desktop-layout">
          <span>All Transactions</span>
          <IconCaretDown />
        </div>
      </button>

      <div className="filter-content">
        <div className="card">
          <div className="card-body">
            <div className="menu">
              <a href="#">All Transactions</a>
              <a href="#">Entertainment</a>
              <a href="#">Bills</a>
              <a href="#">Groceries</a>
              <a href="#">Dining Out</a>
              <a href="#">Transportation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PFAFilterButton