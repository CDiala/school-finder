import "./ImageCarousel.css";
import arrow_left from "../../../images/arrow_left.svg";
import arrow_right from "../../../images/arrow_right.svg";

const ImageCarousel = ({ heading, note, component }) => {
  return (
    <section className="carousel">
      <div className="carousel-top">
        <div className="carousel-header">
          <h2 className="carousel-heading">{"heading"}</h2>
          <p className="carousel-note">{"note"}</p>
        </div>
        <div className="carousel-top-nav">
          <img src={arrow_left} alt="" />
          <img src={arrow_right} alt="" />
        </div>
      </div>
      <div className="carousel-body">{"component"}</div>
      <div className="carousel-bottom">
        <div className="carousel-bottom-nav">
          <div data-id="1" className="carousel-nav"></div>
          <div data-id="2" className="carousel-nav"></div>
          <div data-id="3" className="carousel-nav"></div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
