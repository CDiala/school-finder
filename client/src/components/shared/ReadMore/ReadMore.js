import { Link } from "react-router-dom";
import "./ReadMore.css";

const ReadMore = ({ path }) => {
  return (
    <Link className="rd-more-link" to={path}>
      ReadMore
    </Link>
  );
};

export default ReadMore;
