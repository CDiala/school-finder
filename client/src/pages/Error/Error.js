import "./Error.css";
import Button from "../../components/shared/Button/Button";

const Error = ({ objError }) => {
  return (
    <div className="error-container">
      <img className="error-image" src={objError.img} alt={objError.alt} />
      <div className="error-details">
        <h1 className="error-title">{objError.title}</h1>
        <p>{objError.description}</p>
        <Button text={"Return to homepage"} width={268} />
      </div>
    </div>
  );
};

export default Error;
