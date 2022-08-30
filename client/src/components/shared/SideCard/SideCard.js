import { Link } from "react-router-dom";
import "./SideCard.css";
import { trimString } from "../../../utils/formatter";

const SideCard = ({ path, src, alt, caption }) => {
  return (
    <figure className="side-card-body">
      <Link to={path}>
        <div className="side-card-img">
          <img src={src} alt={alt} />
        </div>
        <figcaption className="side-card-title">
          {trimString(caption)}
        </figcaption>
      </Link>
    </figure>
  );
};

export default SideCard;
