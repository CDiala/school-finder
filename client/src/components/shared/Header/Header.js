import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import "./Header.css";

const Header = ({ itemsArray, logo }) => {
  return (
    <header className="header-container">
      <nav className="header-block block-center nav-container">
        <Link className="logo" to={process.env.PUBLIC_URL + "/"}>
          <img src={logo} alt="website logo" />
        </Link>
        <ul className="nav-links nav-links-row link-gap-big">
          {itemsArray.map((item, index) => {
            return (
              index > 0 &&
              index < 5 && (
                <NavLink
                  key={index}
                  itemClass={item.itemClass}
                  path={item.path}
                  linkClass={item.linkClass}
                  imgClass={item.imgClass}
                  imgSrc={item.imgSrc}
                  alt={item.alt}
                  text={item.text}
                />
              )
            );
          })}
        </ul>
        <ul className="nav-links nav-links-row link-gap-small">
          {itemsArray.map((item, index) => {
            return (
              index >= 5 &&
              index < 9 && (
                <NavLink
                  key={index}
                  itemClass={item.itemClass}
                  path={item.path}
                  linkClass={item.linkClass}
                  imgClass={item.imgClass}
                  imgSrc={item.imgSrc}
                  alt={item.alt}
                  text={item.text}
                />
              )
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
