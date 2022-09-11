import "./RSCard.css";

const RSCard = ({ src, alt }) => {
  return (
    <figure>
      <picture>
        <img src={src} alt={alt} />
      </picture>
      <figcaption>
        <p>hello there</p>
        <label></label>
      </figcaption>
    </figure>
  );
};

export default RSCard;
