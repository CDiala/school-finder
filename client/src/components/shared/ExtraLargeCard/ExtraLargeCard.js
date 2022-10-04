import { trimString, appendReadMoreLink } from "../../../utils/formatter";

import "./ExtraLargeCard.css";

const ExtraLargeCard = ({
  src,
  alt,
  header,
  body,
  charLength,
  readMore,
  date,
  dateTime,
  bookmark,
}) => {
  const isLongText = appendReadMoreLink(trimString(body, charLength));
  return (
    <div className="xl-card-container">
      <div className="xl-card-img-box">
        <img className="xl-card-img" src={src} alt={alt} />
      </div>
      <div className="xl-card-details">
        <div className="xl-card-text">
          <h3 className="xl-card-header">{header}</h3>
          <p>
            {trimString(body, charLength)}
            {isLongText ? readMore : undefined}
          </p>
        </div>
        <div className="xl-card-footer">
          <p>
            <time dateTime={dateTime}>{date}</time>
          </p>
          <div className="bookmark">{bookmark}</div>
        </div>
      </div>
    </div>
  );
};

export default ExtraLargeCard;
