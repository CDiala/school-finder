import { trimString, appendReadMoreLink } from "../../../utils/formatter";
import "./ExtraLargeCard.css";
import Bookmark from "../Bookmark/Bookmark";
import ReadMore from "../ReadMore/ReadMore";

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
          <p className="xl-card-body">
            {trimString(body, charLength)}
            {isLongText ? "" : " "}
            {readMore}
          </p>
        </div>
        <time dateTime={dateTime}>{date}</time>
      </div>
      <div className="bookmark">{bookmark}</div>
    </div>
  );
};

const ExtraLargeCardList = ({ scholarshipList }) => {
  return (
    <div className="scholarship-list-box">
      {scholarshipList.map((item, index) => {
        return (
          <ExtraLargeCard
            key={index}
            src={item.img}
            header={item.title}
            charLength={200}
            bookmark={<Bookmark />}
            alt={item.alt}
            readMore={<ReadMore path={item.path} />}
            body={item.details}
          />
        );
      })}
    </div>
  );
};

// export default ExtraLargeCard;
export default ExtraLargeCardList;
