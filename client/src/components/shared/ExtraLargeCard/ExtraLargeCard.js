import { trimString } from "../../../utils/formatter";
import ReadMore from "../ReadMore/ReadMore";
import "./ExtraLargeCard.css";

const ExtraLargeCard = ({ src, alt, header, body }) => {
  return (
    <div className="xl-card-container">
      <div className="xl-card-img-box">
        <img className="xl-card-img" src={src} alt={alt} />
      </div>
      <div>
        <h3 className="xl-card-header">{header}</h3>
        <p>
          {trimString(body, 350) + " "}
          <ReadMore path={"/"} />
        </p>
      </div>
    </div>
  );
};

export default ExtraLargeCard;
