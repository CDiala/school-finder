import "./ImageCarousel.css";
import FeatureSchoolList from "../FeatureSchoolCard/FeatureSchoolCard";

const ImageCarousel = ({ heading, note, component }) => {
  return (
    <section className="carousel">
      <div className="carousel-top">
        <div className="carousel-header">
          <h2 className="carousel-heading">{heading}</h2>
          <p className="carousel-note">{note}</p>
        </div>
        <div className="carousel-top-nav">
          <svg
            className="carousel-left-arrow-nav"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_928_5467)">
              <path
                d="M12 24C18.6166 24 24 18.6166 24 12C24 5.38336 18.6166 0 12 
                0C5.38336 0 0 5.38336 0 12C0 18.6166 5.38336 24 12 24ZM12 1.19902C17.956 
                1.19902 22.801 6.04405 22.801 12C22.801 17.956 17.956 22.801 12 22.801C6.04405 
                22.801 1.19902 17.956 1.19902 12C1.19902 6.04405 6.04405 1.19902 12 1.19902Z"
              />
              <path
                d="M6.36257 12.4256L9.73451 15.7975C9.96942 16.0324 10.3463 16.0324 10.5812 
                15.7975C10.8161 15.5626 10.8161 15.1858 10.5812 14.9508L8.23206 12.6017L17.2125 
                12.6017C17.5453 12.6017 17.8145 12.3326 17.8145 11.9998C17.8145 11.667 17.5453 
                11.3978 17.2125 11.3978L8.23696 11.3978L10.5861 9.04872C10.821 8.81381 10.821 
                8.43697 10.5861 8.20206C10.3512 7.96715 9.97432 7.96715 9.73941 8.20206L6.36746 
                11.574C6.25001 11.6915 6.19128 11.8432 6.19128 11.9998C6.19128 12.1564 6.24512 
                12.3081 6.36257 12.4256Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_928_5467">
                <rect
                  width="24"
                  height="24"
                  transform="translate(24) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="carousel-right-arrow-nav"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_928_5472)">
              <path
                d="M12 0C5.38336 0 0 5.38336 0 12C0 18.6166 5.38336 24 12 
                24C18.6166 24 24 18.6166 24 12C24 5.38336 18.6166 0 12 
                0ZM12 22.801C6.04405 22.801 1.19902 17.956 1.19902 12C1.19902 
                6.04405 6.04405 1.19902 12 1.19902C17.956 1.19902 22.801 6.04405 
                22.801 12C22.801 17.956 17.956 22.801 12 22.801Z"
              />
              <path
                d="M17.6374 11.5744L14.2655 8.2025C14.0306 7.96758 13.6537 7.96758 
                13.4188 8.2025C13.1839 8.43741 13.1839 8.81424 13.4188 9.04915L15.7679 
                11.3983H6.7875C6.45471 11.3983 6.18555 11.6674 6.18555 12.0002C6.18555 
                12.333 6.45471 12.6022 6.7875 12.6022H15.763L13.4139 14.9513C13.179 
                15.1862 13.179 15.563 13.4139 15.7979C13.6488 16.0328 14.0257 16.0328 
                14.2606 15.7979L17.6325 12.426C17.75 12.3085 17.8087 12.1568 17.8087 
                12.0002C17.8087 11.8436 17.7549 11.6919 17.6374 11.5744Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_928_5472">
                <rect
                  width="24"
                  height="24"
                  transform="translate(0 24) rotate(-90)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="carousel-body">
        {/* <FeatureSchoolList /> */}
        {component}
      </div>
      <div className="carousel-bottom">
        <div className="carousel-bottom-nav">
          <div data-id="1" className="carousel-round-nav"></div>
          <div data-id="2" className="carousel-round-nav"></div>
          <div data-id="3" className="carousel-round-nav"></div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
