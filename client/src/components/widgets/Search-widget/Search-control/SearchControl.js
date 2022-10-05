import DropDown from "../../../shared/Dropdown/Dropdown";
import Button from "../../../shared/Button/Button";
import { programList } from "../../../../data/searchControlData";
import "./SearchControl.css";

const SearchControl = () => {
  return (
    <div className="search-box">
      <DropDown programList={programList} />
      <Button text={"Find school"} width={120} />
    </div>
  );
};

export default SearchControl;
