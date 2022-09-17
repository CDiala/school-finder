import "./TestimonialCard.css";

const TestimonialCard = (props) => {
  const { testimony, names, status, image } = props.testament;
  return (
    <>
      <blockquote className="testimonial-container">
        <q className="testimony">{testimony}</q>
        <figcaption className="testimonial-card-bottom">
          <cite className="testimony-name">{names}</cite>
          <cite className="testimony-title">{status}</cite>
        </figcaption>
        <img className="testimony-profile" src={image} alt="" />
      </blockquote>
    </>
  );
};

export default TestimonialCard;
