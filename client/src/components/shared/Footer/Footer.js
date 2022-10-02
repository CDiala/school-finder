import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Footer.css";
import NavLink from "../NavLink/NavLink";
import Input from "../Input/Input";
import arrow from "../../../images/arrow.svg";
import SocialMedia from "../Social-media/SocialMedia";
import { socialMediaArray } from "../../../data/social-media";

const Footer = ({ itemsArray }) => {
  const copyrightDate = new Date().getFullYear(Date.now());
  console.log(copyrightDate);

  return (
    <footer className="footer-block">
      <section className="footer-change-me">
        <div className="footer-inner-container ">
          <div className="footer-col col-1">
            <Link className="logo" to={process.env.PUBLIC_URL + "/"}>
              <img src={logo} alt="website logo" />
            </Link>
            <p>
              School scout seeks to help students make the best educational
              decision by providing them with all relevant information and also
              helping them choose a career for themselves.
            </p>
          </div>
          <ul className="footer-nav nav-links">
            {itemsArray.map((item, index) => {
              return (
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
          <ul className="footer-nav nav-links">
            {itemsArray.map((item, index) => {
              return (
                index >= 9 && (
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
          <div className="newsletter">
            <h3 className="newsletter-title">Newsletter Sign up</h3>
            <p>Signup to get important information via mail</p>
            <Input
              src={arrow}
              alt="right arrow"
              placeholder={"Enter email address"}
            />
            <SocialMedia socialMediaArray={socialMediaArray} />
          </div>
        </div>
      </section>
      <section className="copyright-section">
        <p className="copyright">
          Copyright &copy; {copyrightDate} SchoolScout. All rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
