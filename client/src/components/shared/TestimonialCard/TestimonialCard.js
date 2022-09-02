import "./TestimonialCard.css";

const TestimonialCard = (props) => {
  const { testimony, names, status, image } = props.testament;
  return (
    <>
      <div className="testimonial-container">
        <div>
          <p className="testimony">{testimony}</p>
        </div>
        <div className="testimonial-card-bottom">
          <div className="tst-crd">
            <p className="testimony-name">{names}</p>
            <p className="testimony-title">{status}</p>
          </div>
          <div className="testimony-profile-container">
            <img className="testimonial-profile" src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
