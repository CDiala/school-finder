import NavLink from "../NavLink/NavLink";
import "./SocialMedia.css";

const SocialMedia = ({ socialMediaArray }) => {
  return (
    <ul className="social-media nav-links">
      {socialMediaArray.map((item, index) => {
        return (
          <NavLink
            key={index}
            itemClass={item.itemClass}
            path={item.path}
            //   linkClass={item.linkClass}
            //   imgClass={item.imgClass}
            imgSrc={item.imgSrc}
            alt={item.alt}
            //   text={item.text}
          />
        );
      })}
    </ul>
  );
};

export default SocialMedia;
