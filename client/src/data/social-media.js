import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";

let publicURL = process.env.PUBLIC_URL;

export const socialMediaArray = [
  {
    itemClass: "nav-link",
    path: publicURL + "/",
    imgSrc: instagram,
    alt: "instagram",
  },
  {
    itemClass: "nav-link",
    path: publicURL + "/",
    imgSrc: linkedin,
    alt: "linkedin",
  },
  {
    itemClass: "nav-link",
    path: publicURL + "/",
    imgSrc: twitter,
    alt: "twitter",
  },
  {
    itemClass: "nav-link",
    path: publicURL + "/",
    imgSrc: facebook,
    alt: "facebook",
  },
];
