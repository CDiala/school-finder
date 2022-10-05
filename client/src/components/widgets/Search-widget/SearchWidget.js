import "./SearchWidget.css";
import { searchNavList } from "../../../data/searchControlData";
import SearchControl from "./Search-control/SearchControl";
import SearchTab from "./Search-tab/SearchTab";

const SearchWidget = () => {
  return (
    <div className="search-widget">
      <SearchTab text={"Explore Schools"} searchTabList={searchNavList} />
      <hr className="search-widget-divider" />
      <SearchControl />
    </div>
  );
};

export default SearchWidget;
