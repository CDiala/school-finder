import "./ExtraLargeCard.css";

const ExtraLargeCard = ({ src, alt, header, body }) => {
  return (
    <div className="xl-card-container">
      <div>
        <img src={src} alt={alt} />
      </div>
      <div>
        <h3>{header}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default ExtraLargeCard;
