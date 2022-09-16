import { trimString } from "../../../utils/formatter";
// import Bookmark from "../Bookmark/Bookmark";
// import ReadMore from "../ReadMore/ReadMore";
import "./ExtraLargeCard.css";

const ExtraLargeCard = ({ src, alt, header, body, readMore, bookmark }) => {
  return (
    <div className="xl-card-container">
      <div className="xl-card-img-box">
        <img className="xl-card-img" src={src} alt={alt} />
      </div>
      <div className="xl-card-details">
        <div className="xl-card-text">
          <h3 className="xl-card-header">{header}</h3>
          <p>
            {trimString(body, 350) + " "}
            {readMore}
            {/* <ReadMore path={"/"} /> */}
          </p>
        </div>
        <div className="bookmark">
          {bookmark}
          {/* <Bookmark /> */}
        </div>
      </div>
    </div>
  );
};

export default ExtraLargeCard;
