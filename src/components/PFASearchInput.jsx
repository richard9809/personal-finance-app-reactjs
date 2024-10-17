import IconSearch from "../components/icons/IconSearch";

const PFASearchInput = ({ placeholder }) => {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder={placeholder} />
      <div className="search-icon">
        <IconSearch />
      </div>
    </div>
  );
};

export default PFASearchInput;
