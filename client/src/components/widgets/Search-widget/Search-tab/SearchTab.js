import setElementStyle from "../../../../utils/toggleClass";
import "./SearchTab.css";

const Tab = ({ text, htmlFor, id, className }) => {
  const toggleBorder = (event) => {
    console.log(event);
    let parentId = event.target.parentElement.id;
    let childId = event.target.id;
    setElementStyle(parentId, childId, "bottom-border");
  };

  return (
    <label
      className={`search-tab ${className}`}
      onClick={(e) => toggleBorder(e)}
      htmlFor={htmlFor}
      id={id}
    >
      {text}
    </label>
  );
};

const SearchTab = ({ searchTabList }) => {
  return (
    <div id="search-tab-box">
      <div className="tab-list" id="tab-list">
        {searchTabList.map((item, index) => {
          return (
            <Tab
              key={index}
              id={`tab${index}`}
              htmlFor={item}
              text={item}
              className={index === 0 && "bottom-border"}
            />
          );
        })}
      </div>
      <label className="search-title" htmlFor="">
        Search for schools by programs, course or location
      </label>
    </div>
  );
};

export default SearchTab;
