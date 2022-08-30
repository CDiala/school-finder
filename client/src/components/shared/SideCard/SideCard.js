import { Link } from "react-router-dom";
import "./SideCard.css";
import { trimString } from "../../../utils/formatter";

const SideCard = ({ path, src, alt, caption }) => {
  return (
    <div className="side-card-body">
      <Link to={path}>
        <div className="side-card-img">
          <img src={src} alt={alt} />
        </div>
        <p className="side-card-title">{trimString(caption)}</p>
      </Link>
    </div>
  );
};

export default SideCard;
