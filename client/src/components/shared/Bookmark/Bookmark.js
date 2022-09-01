import { useState } from "react";
import bkOff from "../../../images/bkmark_off.svg";
import bkOn from "../../../images/bkmark_on.svg";
import "./Bookmark.css";

const Bookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div
      className="bookmark-container"
      onClick={(e) => {
        e.preventDefault();
        setIsBookmarked(!isBookmarked);
      }}
    >
      <img src={isBookmarked ? bkOn : bkOff} alt="bookmark off" />
    </div>
  );
};

export default Bookmark;
