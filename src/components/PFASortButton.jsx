import IconCaretDown from "./icons/IconCaretDown";
import IconSort from "./icons/IconSort";

const PFASortButton = () => {
  return (
    <div className="filter-button">
      <label htmlFor="sort">Sort by</label>
      <button id="sort">
        <div className="mobile-layout">
          <IconSort />
        </div>

        <div className="desktop-layout">
          <span>Latest</span>
          <IconCaretDown />
        </div>

        <div className="sort-content" id="dropdownMenu">
          <div className="card">
            <div className="card-body">
              <div className="menu">
                <a href="#">Oldest</a>
                <a href="#">Latest</a>
                <a href="#">A to Z</a>
                <a href="#">Z to A</a>
                <a href="#">Highest</a>
                <a href="#">Lowest</a>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default PFASortButton