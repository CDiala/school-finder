import { Link } from "react-router-dom";

const NavLink = ({
  itemClass,
  path,
  linkClass,
  imgClass,
  imgSrc,
  alt,
  text,
}) => {
  return (
    <li className={itemClass}>
      <Link to={`${process.env.PUBLIC_URL}${path}`} className={linkClass}>
        <img className={imgClass} src={imgSrc} alt={alt} />
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
