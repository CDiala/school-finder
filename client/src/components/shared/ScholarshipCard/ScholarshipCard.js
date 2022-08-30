import "./ScholarshipCard.css";
import { Link } from "react-router-dom";

export const ScholarshipCard = ({ src, alt, path, text }) => {
  return (
    <figure className="sch-figure">
      <figcaption className="sch-caption">
        <div className="sch-img-box">
          <img className="sch-image" src={src} alt={alt} />
        </div>
        <Link className="sch-link" to={path}>
          {text}
        </Link>
      </figcaption>
    </figure>
  );
};

export default ScholarshipCard;
