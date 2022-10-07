import err404 from "../images/404.svg";
import err500 from "../images/500.svg";

export const errorData = {
  404: {
    title: "OOPS! PAGE NOT FOUND",
    description: "Maybe you entered an incorrect word",
    img: err404,
    alt: "error404",
  },
  500: {
    title: "INTERNAL SERVER ERROR!",
    description: "Sorry, something went wrong",
    img: err500,
    alt: "error500",
  },
};
